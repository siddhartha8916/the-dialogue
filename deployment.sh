#!/bin/bash

# Set variables
DOCKERFILE_DIR="." 
IMAGE_NAME="the-dialogue"  
IMAGE_TAG="latest" 
TAR_FILE="the-dialogue.tar"  
BACKUP_DIR="/backup" 

echo "Checking for existing Docker image $IMAGE_NAME:$IMAGE_TAG..."
if docker image inspect $IMAGE_NAME:$IMAGE_TAG > /dev/null 2>&1; then
  echo "Removing existing Docker image $IMAGE_NAME:$IMAGE_TAG..."
  docker image rm -f $IMAGE_NAME:$IMAGE_TAG
else
  echo "No existing Docker image found."
fi

# Step 1: Build the Docker image from the Dockerfile
echo "Building Docker image without cache..."
docker build --no-cache -t $IMAGE_NAME:$IMAGE_TAG $DOCKERFILE_DIR
if [ $? -ne 0 ]; then
  echo "Docker build failed. Exiting script."
  exit 1
fi

# Step 2: Save the Docker image as a .tar file
echo "Saving Docker image as a tar file..."
docker save -o $TAR_FILE $IMAGE_NAME:$IMAGE_TAG

# Step 3: Copy the .tar file to the EC2 instance
echo "Copying the tar file to EC2 instance..."
scp -i $PEM_FILE $TAR_FILE $EC2_USER@$EC2_IP:/tmp/

# Step 4: SSH into the EC2 instance and stop the current container
echo "Stopping the running container 'brainstack-website' on EC2..."
ssh -i $PEM_FILE $EC2_USER@$EC2_IP << EOF
  # Step 5: Take a backup of the current image
  echo "Backing up the current image..."
  docker save -o $BACKUP_DIR/backup_$(date +%F_%T)_$IMAGE_NAME.tar $IMAGE_NAME:$IMAGE_TAG
  
  # Step 5.1: Check the backup folder and delete the oldest backup if more than 6 files exist
  echo "Checking for excess backup files..."
  backup_count=\$(ls $BACKUP_DIR/*.tar | wc -l)
  if [ \$backup_count -gt 6 ]; then
    oldest_backup=\$(ls -t $BACKUP_DIR/*.tar | tail -n 1)
    echo "Deleting oldest backup: \$oldest_backup"
    rm -f \$oldest_backup
  fi
  
  # Step 6: Stop and remove the current container
  echo "Stopping and removing container 'brainstack-website'..."
  docker stop brainstack-website
  docker rm brainstack-website

  # Step 7: Remove the old image
  echo "Removing the old Docker image..."
  docker image rm $IMAGE_NAME

  # Step 8: Load the new image from the tar file
  echo "Loading the new Docker image from tar file..."
  docker load -i /tmp/$TAR_FILE

  # Step 9: Restart the container with the new image
  echo "Restarting the 'brainstack-website' container..."
  docker run -d --name brainstack-website -p 4500:80 $IMAGE_NAME:$IMAGE_TAG

  # Step 10: Remove the tar file from /tmp/ directory
  echo "Removing the tar file from /tmp/ directory..."
  rm -f /tmp/$TAR_FILE

EOF

# Step 10: Clean up the local tar file (optional)
echo "Cleaning up local tar file..."
rm -f $TAR_FILE

echo "Deployment completed successfully."
