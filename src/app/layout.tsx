import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Teguh Insani — Front-End Developer & AI Enthusiast",
  description:
    "Portfolio of Muhammad Teguh Insani — an Information Technology student specializing in Front-End Development, AI, IoT, Graphic Design, and Web Development.",
  keywords: [
    "Muhammad Teguh Insani",
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AI",
    "IoT",
    "Portfolio",
    "Web Developer",
    "UI/UX",
  ],
  authors: [{ name: "Muhammad Teguh Insani" }],
  creator: "Muhammad Teguh Insani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadteguh.dev",
    title: "Muhammad Teguh Insani — Front-End Developer & AI Enthusiast",
    description:
      "Portfolio of Muhammad Teguh Insani — Building elegant digital experiences at the intersection of design and technology.",
    siteName: "Muhammad Teguh Insani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Teguh Insani — Front-End Developer & AI Enthusiast",
    description:
      "Portfolio of Muhammad Teguh Insani — Building elegant digital experiences at the intersection of design and technology.",
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
        <body className="min-h-full">
          {children}
          <Toaster
            theme="dark"
            richColors
            position="top-right"
          />
        </body>
      </html>
  );
}
