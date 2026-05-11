import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komu piosenkę komu?",
  description: "Strona z dobrymi piosenkami dla każdego",
  verification: {
    google: "utm2ojb8-GM5cE3rl7Ga2ZI_Kiec_vUkgadk0I1Cg_Q",
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
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-GL5FEM8BKR" />
    </html>
  );
}
