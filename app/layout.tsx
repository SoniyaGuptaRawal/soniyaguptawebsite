import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soniya Gupta-Rawal | Quantitative Marketing Researcher",
  description:
    "Research portfolio of Soniya Gupta-Rawal — Quantitative Marketing researcher specializing in emerging markets, micro-entrepreneurs, field experiments, and AI-driven marketing strategy.",
  openGraph: {
    title: "Soniya Gupta-Rawal | Quantitative Marketing Researcher",
    description:
      "Finding potential in percentages and identifying narratives behind numbers for business strategy and marketing insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
