import type { Metadata } from "next";
import { ReactNode } from 'react';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Web3 Books - The Future of Reading",
  description: "Experience the revolution in digital reading with Web3 Books. Purchase, collect, and trade unique NFT books while supporting your favorite authors directly.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#E8F1FF] to-[#DBEAFE]`}
      >
        {children}
      </body>
    </html>
  );
}
