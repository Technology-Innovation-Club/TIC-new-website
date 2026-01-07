import type React from "react";
import type { Metadata, Viewport } from "next";
import { figtree, inter, poppins } from "../lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Innovation Club | Pan-Atlantic University",
  description:
    "Tech Innovation Club (TIC) is Pan-Atlantic University's innovation engine, building real products, winning hackathons, and developing world-class talent in Lagos, Nigeria.",
  keywords: [
    "TIC",
    "Pan-Atlantic University",
    "PAU",
    "Lagos",
    "hackathons",
    "innovation",
    "technology",
  ],
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Tech Innovation Club | Pan-Atlantic University",
    description:
      "Real products. Real wins. Real impact. Meet PAU's student builders competing on national stages and shipping practical tech.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10014C",
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
      className={`${figtree.variable} ${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-poppins">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow dark:focus:bg-gray-900"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
