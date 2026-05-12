import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StatusBar } from "@/components/StatusBar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "moonsdata — Darren Mounganga | Data Science & Product Builder",
  description:
    "Darren Mounganga. Data Science MSc graduate. Building HELM with AI. Documenting the journey from data to product.",
  metadataBase: new URL("https://moonsdata.com"),
  openGraph: {
    title: "moonsdata — Darren Mounganga",
    description:
      "Data science graduate building products with AI. Currently shipping HELM.",
    url: "https://moonsdata.com",
    siteName: "moonsdata",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "moonsdata — Darren Mounganga",
    description:
      "Data science graduate building products with AI. Currently shipping HELM.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll />
        <StatusBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
