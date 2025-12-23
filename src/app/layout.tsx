import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rekha Garments - Corporate Uniform & Promotional T-Shirt Manufacturing Partner",
  description: "Premium B2B manufacturer of corporate uniforms, promotional T-shirts, and unisex apparel. High-quality bulk manufacturing with custom branding solutions for businesses and organizations.",
  keywords: ["Rekha Garments", "corporate uniforms", "promotional T-shirts", "unisex apparel", "B2B manufacturing", "custom branding", "bulk orders", "Vadodara"],
  authors: [{ name: "Rekha Garments" }],

  openGraph: {
    title: "Rekha Garments - Corporate Uniform & Promotional T-Shirt Manufacturing",
    description: "Premium B2B manufacturer of corporate uniforms and promotional apparel with custom branding solutions.",
    url: "https://rekhagarments.com",
    siteName: "Rekha Garments",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekha Garments - Corporate Uniform & Promotional T-Shirt Manufacturing",
    description: "Premium B2B manufacturer of corporate uniforms and promotional apparel with custom branding solutions.",
  },
  icons: {
    icon: "/rekha_logo.jpg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans`}
      >
        <SiteHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
