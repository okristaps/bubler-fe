export default function manifest() {
  return {
    name: "BUBLER",
    short_name: "BUBLER",
    description: "BUBLER: The Ultimate Meme Catcher Game",
    start_url: "/",
    display: "standalone",
    background_color: "#002c2e",
    theme_color: "#00f2fe",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
