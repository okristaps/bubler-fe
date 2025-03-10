const APP_NAME = "Odincash";
const APP_DEFAULT_TITLE = "Odincash";
const APP_TITLE_TEMPLATE = "Odincash";
const APP_DESCRIPTION = "ODINCASH: Meme Catcher on blockchain";

export const metadata = {
  title: "ODINCASH: Meme Catcher on BlockChain",
  description:
    "ODINCASH is a meme-powered adventure with gameplay utility! Catch ODINCASH tokens in-game for crypto rewards on the blazing-fast  blockchain. Join the fun now!",
  manifest: "/manifest.json",
  openGraph: {
    title: "ODINCASH: Meme Catcher on BlockChain",
    description:
      "Catch ODINCASH tokens in-game and win crypto rewards! Built on the blockchain for fast transactions and endless fun.",
    url: "https://odincash.org/",
    siteName: "ODINCASH",
    images: [
      {
        url: "https:// odincash.club/image3.png",
        width: 1200,
        height: 630,
        alt: "ODINCASH Meme Game - Gameplay Highlights",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ODINCASH: Meme Catcher on BlockChain",
    description: "Catch ODINCASH tokens and win crypto rewards in this meme-powered game on the  blockchain. Play now!",
    image: "https://odincash.org/image3.png",
  },

  robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1",

  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ODINCASH Meme Catcher Game",
    url: "https://odincash.org",
    description: "ODINCASH is an exciting meme-powered game where you can earn crypto rewards by catching memes!",
    image: "https://odincash.org/image3.png",
    publisher: {
      "@type": "Organization",
      name: "ODINCASH Team",
      logo: "https://odincash.org/image3.png",
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
      startupImage: [
        {
          media:
            "screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_16_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_16_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/iPhone_11__iPhone_XR_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
        },
        {
          media:
            "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
        },
        {
          media:
            "screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/13__iPad_Pro_M4_landscape.png",
        },
        {
          media:
            "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/12.9__iPad_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/11__iPad_Pro_M4_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/10.9__iPad_Air_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/10.5__iPad_Air_landscape.png",
        },
        {
          media:
            "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/10.2__iPad_landscape.png",
        },
        {
          media:
            "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
        },
        {
          media:
            "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "splash-screens/8.3__iPad_Mini_landscape.png",
        },
        {
          media:
            "screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_16_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_16_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/iPhone_11__iPhone_XR_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
        },
        {
          media:
            "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
        },
        {
          media:
            "screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/13__iPad_Pro_M4_portrait.png",
        },
        {
          media:
            "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/12.9__iPad_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/11__iPad_Pro_M4_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/10.9__iPad_Air_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/10.5__iPad_Air_portrait.png",
        },
        {
          media:
            "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/10.2__iPad_portrait.png",
        },
        {
          media:
            "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
        },
        {
          media:
            "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "splash-screens/8.3__iPad_Mini_portrait.png",
        },
      ],
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
    icons: {
      icon: [
        { url: "icons/192x192.png", sizes: "192x192", type: "image/png" },
        { url: "icons/256x256.png", sizes: "256x256", type: "image/png" },
        { url: "icons/384x384.png", sizes: "384x384", type: "image/png" },
        { url: "icons/512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "icons/512x512.png",
    },
    other: {
      google: "notranslate",
    },
  },

  additionalMetaTags: [
    {
      name: "keywords",
      content: "ODINCASH, meme game, crypto rewards,  blockchain, play-to-earn, meme token",
    },
    {
      name: "author",
      content: "ODINCASH Team",
    },
    {
      name: "theme-color",
      background_color: "#0c0c12",
    },
  ],
};
