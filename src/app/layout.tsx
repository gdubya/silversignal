import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lever Du? - Trygghet for deg og dine",
  description: "En enkel tjeneste som sikrer at dine eldre har det bra, hver dag.",
  metadataBase: new URL('https://leverdu.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lever Du? - Trygghet for deg og dine',
    description: 'En enkel tjeneste som sikrer at dine eldre har det bra, hver dag.',
    url: 'https://leverdu.no',
    siteName: 'Lever Du?',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lever Du? - Trygghet for deg og dine',
    description: 'En enkel tjeneste som sikrer at dine eldre har det bra, hver dag.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
