import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tanmay Dixit | Business Analyst & Automation Engineer",
  description:
    "Portfolio of Tanmay Dixit, a Pune-based business analyst and automation specialist with 10+ years across RPA, Power Platform, Python, and AI/ML.",
  keywords: [
    "Tanmay Dixit",
    "Business Analyst",
    "Automation Engineer",
    "RPA",
    "Power Platform",
    "AI ML",
    "Process Transformation",
  ],
  openGraph: {
    title: "Tanmay Dixit | Business Analyst & Automation Engineer",
    description:
      "Enterprise automation portfolio covering business analysis, RPA, process discovery, Power Platform, Python, and AI/ML.",
    type: "website",
    images: ["/tanmay.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
