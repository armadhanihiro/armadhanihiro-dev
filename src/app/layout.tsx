import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Armadhani Hiro",
  description:
    "Portfolio of Armadhani Hiro, showcasing software development, AI, data, and automation projects.",
  keywords: [
    "Armadhani Hiro",
    "Software Developer",
    "AI Engineer",
    "Data Analyst",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Armadhani Hiro" }],
  creator: "Armadhani Hiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
