import type { Metadata } from "next";
import { Familjen_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { ThemeProvider } from "@/components/theme-provider";
import { SplashScreen } from "@/components/splash-screen";

export const viewport = {
  themeColor: "#3B82F6",
};

const displayFont = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.ico",
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${displayFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <SplashScreen />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
