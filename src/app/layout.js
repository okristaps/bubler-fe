import { Fuzzy_Bubbles } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { metadata } from "../../metadata";
import HeaderBUBLER from "@/components/header";
import Footer from "@/components/footer";
import HeaderFooterWrapper from "@/components/layoutWrapper";

const bubbles = Fuzzy_Bubbles({
  weight: ["400", "700"],
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
        <meta name="theme-color" content="#119dff" />
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
