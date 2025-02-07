import { Fuzzy_Bubbles } from "next/font/google";
import "./globals.css";
import BubblesAnimation from "../../components/bubblesanim";
import { Analytics } from "@vercel/analytics/react";
const bubbles = Fuzzy_Bubbles({
  weight: ["400", "700"],
  variable: "--font-fuzzy-bubbles",
  subsets: ["latin"],
});

export const metadata = {
  title: "BUBLER: Meme Catcher on ICP Chain",
  description:
    "BUBLER is a meme-powered adventure with gameplay utility! Catch BUBLER tokens in-game for crypto rewards on the blazing-fast ICP chain. Join the fun now!",

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
  viewport: "width=device-width, initial-scale=1",

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
        className={`${bubbles.variable} font-fuzzy antialiased bg-gradient-to-r from-pink-500 via-pink-500 via-purple-600 to-blue-700 relative overflow-x-hidden overflow-y-auto`}
      >
        <h1 className="text-[59px] text-center mt-10  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-2xl animate-bounce">
          BUBLER
        </h1>

        <main>
          <BubblesAnimation count={50}>
            {children}
            <Analytics />
          </BubblesAnimation>
        </main>
      </body>
    </html>
  );
}
