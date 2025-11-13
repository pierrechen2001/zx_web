import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocialButtons } from "@/components/interactive/FloatingSocialButtons";
import { AntAnimation } from "@/components/interactive/AntAnimation";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "中星害蟲驅除有限公司 | 專業害蟲防治服務",
    template: "%s | 中星害蟲驅除有限公司",
  },
  description: "中星害蟲驅除有限公司提供專業的害蟲防治服務，包括白蟻、蟑螂、老鼠、蚊蠅等害蟲驅除。政府立案、專業評估、快速到府、居家友善。服務範圍涵蓋台北、新北、桃園、新竹等地區。",
  keywords: ["害蟲防治", "除蟲公司", "白蟻防治", "蟑螂防治", "老鼠防治", "中星害蟲驅除"],
  authors: [{ name: "中星害蟲驅除有限公司" }],
  creator: "中星害蟲驅除有限公司",
  publisher: "中星害蟲驅除有限公司",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "中星害蟲驅除有限公司 | 專業害蟲防治服務",
    description: "專業、安全、快速到府服務。政府立案，守護您的家，遠離害蟲。",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "中星害蟲驅除有限公司",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "中星害蟲驅除有限公司",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "中星害蟲驅除有限公司 | 專業害蟲防治服務",
    description: "專業、安全、快速到府服務。政府立案，守護您的家，遠離害蟲。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={notoSansTC.variable}>
      <body className="antialiased">
        <AntAnimation />
        <Header />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}

