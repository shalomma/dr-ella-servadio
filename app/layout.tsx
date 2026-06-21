import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Ella Servadio | Family Medicine Specialist",
  description:
    "Dr. Ella Servadio is a board-certified family medicine specialist in Givataim, Israel — providing compassionate, comprehensive care for the whole family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased bg-white text-stone-800">{children}</body>
    </html>
  );
}
