export default function manifest() {
  return {
    name: "ODINCASH",
    short_name: "ODINCASH",
    description: "ODINCASH: The Ultimate Meme Catcher Game",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c12",
    theme_color: "#0c0c12",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
