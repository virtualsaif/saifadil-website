import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saif Adil — Technology Architect & AI Strategist",
  description:
    "Sr. Technology Architect with 22+ years driving innovation in AI, cloud, virtualization, and enterprise storage. Based in Houston, TX.",
  metadataBase: new URL("https://saifadil.com"),
  openGraph: {
    title: "Saif Adil — Technology Architect & AI Strategist",
    description:
      "Sr. Technology Architect with 22+ years driving innovation in AI, cloud, virtualization, and enterprise storage.",
    url: "https://saifadil.com",
    siteName: "Saif Adil",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Adil — Technology Architect & AI Strategist",
    description:
      "Sr. Technology Architect with 22+ years driving innovation in AI, cloud, virtualization, and enterprise storage.",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
