import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import { FooterControlProvider } from "@/components/providers/FooterControl";
import { RootChrome } from "@/components/providers/RootChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * `new URL()` throws on invalid values — a bad NEXT_PUBLIC_SITE_URL in .env
 * will crash every page with a 500. Always fall back to localhost.
 */
function getMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return new URL("http://localhost:3000");
  }
  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return new URL(withProtocol);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Elementa Protocol",
    template: "%s | Elementa",
  },
  description:
    "Elementa — multi-chain liquidity and DeFi infrastructure. Secure, fast, and intuitive wallet and protocol experience.",
  openGraph: {
    title: "Elementa Protocol",
    description:
      "Multi-chain liquidity and DeFi infrastructure. Secure, fast, and intuitive — buy, swap, and manage assets across chains.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elementa Protocol",
    description: "Multi-chain liquidity and DeFi infrastructure.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#15202f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        <FooterControlProvider>
          <RootChrome>{children}</RootChrome>
        </FooterControlProvider>
      </body>
    </html>
  );
}
