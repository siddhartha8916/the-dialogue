# syntax=docker.io/docker/dockerfile:1

# Step 1: Base Image
FROM node:18-alpine AS base

# Set the working directory for the app
WORKDIR /app

# Install dependencies only when needed (via yarn, npm, or pnpm)
RUN apk add --no-cache libc6-compat

# Step 2: Install dependencies
FROM base AS deps

# Copy package.json and lock files to install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Install dependencies based on lockfile
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Step 3: Build Stage
FROM base AS builder

# Set the working directory
WORKDIR /app

# Copy the node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all source code into the container
COPY . .

# Run the Next.js build and export commands to generate static files
RUN npm run build

# Step 4: Production Stage (NGINX)
FROM nginx:alpine

# Expose port 80 for HTTP
EXPOSE 80

# Copy the static files from the builder stage's out directory into NGINX's public folder
COPY --from=builder /app/out /usr/share/nginx/html

# Optionally, copy a custom NGINX configuration file if needed
COPY nginx-conf/nginx.conf /etc/nginx/nginx.conf

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
