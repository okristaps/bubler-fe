import { Hind_Madurai } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { metadata } from "../../metadata";
import HeaderFooterWrapper from "@/components/layoutWrapper";

const bubbles = Hind_Madurai({
  weight: ["400"],
  variable: "--font-fuzzy-bubbles",
  subsets: ["latin"],
});

export { metadata };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Bubler" />
        <link rel="apple-touch-startup-image" href="/splash-screens/iPhone_16_Pro_Max_portrait.png" />
        <meta name="theme-color" content="#151922" />
      </Head>
      <body className={`${bubbles.variable} font-fuzzy antialiased relative overflow-x-hidden overflow-y-auto`}>
        <HeaderFooterWrapper>
          <Analytics />
          {children}
        </HeaderFooterWrapper>
      </body>
    </html>
  );
}
