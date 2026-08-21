import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunrise International School | Badlapur West, Thane",
  description: "Sunrise International School integrates modern technology (V.A.R.K model) and state-of-the-art infrastructure to deliver holistic development, sports lab, and quality education.",
  keywords: ["Sunrise International School", "Badlapur schools", "best schools in Thane", "Siddhi Education Trust", "school on mountains", "VARK teaching model"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
