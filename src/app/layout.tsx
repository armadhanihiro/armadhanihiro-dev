import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  openGraph: {
    title: "Armadhani Hiro | Software Developer & AI Enthusiast",
    description:
      "Portfolio showcasing software development, AI, data, and automation projects.",
    url: "https://armadhanihiro.dev",
    siteName: "armadhanihiro.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Armadhani Hiro Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armadhani Hiro | Software Developer & AI Enthusiast",
    description:
      "Portfolio showcasing software development, AI, data, and automation projects.",
    images: ["/og-image.png"],
  },
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
