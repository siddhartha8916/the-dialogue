import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "The Dialogue",
  description: "A modern hub for The Dialogue — learn more and register to participate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
