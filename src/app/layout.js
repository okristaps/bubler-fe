import { Fuzzy_Bubbles } from "next/font/google";
import "./globals.css";
import BubblesAnimation from "../components/bubblesanim";
import { Analytics } from "@vercel/analytics/react";
import HeaderBUBLER from "@/components/header";
import Footer from "@/components/footer";
const bubbles = Fuzzy_Bubbles({
  weight: ["400", "700"],
  variable: "--font-fuzzy-bubbles",
  subsets: ["latin"],
});

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata = {
  title: "BUBLER: Meme Catcher on ICP Chain",
  description:
    "BUBLER is a meme-powered adventure with gameplay utility! Catch BUBLER tokens in-game for crypto rewards on the blazing-fast ICP chain. Join the fun now!",
  manifest: "/manifest.json",
  openGraph: {
    title: "BUBLER: Meme Catcher on ICP Chain",
    description:
      "Catch BUBLER tokens in-game and win crypto rewards! Built on the ICP blockchain for fast transactions and endless fun.",
    url: "https://bubler.club",
    siteName: "BUBLER",
    images: [
      {
        url: "https:// bubler.club/image3.png",
        width: 1200,
        height: 630,
        alt: "BUBLER Meme Game - Gameplay Highlights",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BUBLER: Meme Catcher on ICP Chain",
    description:
      "Catch BUBLER tokens and win crypto rewards in this meme-powered game on the ICP blockchain. Play now!",
    image: "https://bubler.club/image3.png",
  },

  robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1",

  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BUBLER Meme Catcher Game",
    url: "https://bubler.club",
    description: "BUBLER is an exciting meme-powered game where you can earn crypto rewards by catching memes!",
    image: "https://bubler.club/image3.png",
    publisher: {
      "@type": "Organization",
      name: "BUBLER Team",
      logo: "https://your-site-url.com/image3.png",
    },
    sameAs: [
      "https://www.facebook.com/bublergame",
      "https://twitter.com/bublergame",
      "https://www.instagram.com/bublergame",
    ],
    applicationName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: APP_DEFAULT_TITLE,
      // startUpImage: [],
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: "website",
      siteName: APP_NAME,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
    twitter: {
      card: "summary",
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
  },

  additionalMetaTags: [
    {
      name: "keywords",
      content: "BUBLER, meme game, crypto rewards, ICP blockchain, play-to-earn, meme token",
    },
    {
      name: "author",
      content: "BUBLER Team",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <meta name="theme-color" content="#D16BFF" />
      <body
        className={`${bubbles.variable} font-fuzzy antialiased bg-[#119dff] relative overflow-x-hidden overflow-y-auto`}
      >
        <HeaderBUBLER />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
