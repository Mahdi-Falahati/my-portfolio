import localFont from "next/font/local";

export const PTSansNarrow = localFont({
  src: [
    {
      path: "../../public/Fonts/PTSansNarrow-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PTSansNarrow-Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});
