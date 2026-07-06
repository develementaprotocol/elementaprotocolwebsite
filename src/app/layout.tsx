import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import { FooterControlProvider } from "@/components/providers/FooterControl";
import { ComingSoonProvider } from "@/components/providers/ComingSoonProvider";
import { RootChrome } from "@/components/providers/RootChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "optional",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600"],
  display: "optional",
  preload: false,
});

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
  icons: { icon: "/favicon.ico" },
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
      <head>
        <link
          rel="preload"
          href="/_next/static/media/e4af272ccee01ff0-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/36966cca54120369-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        <FooterControlProvider>
          <ComingSoonProvider>
            <RootChrome>{children}</RootChrome>
          </ComingSoonProvider>
        </FooterControlProvider>
      </body>
    </html>
  );
}
