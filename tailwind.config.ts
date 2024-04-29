import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["ColoresFont", "sans-serif"],
        regular: ["NormalFont", "sans-serif"]
      },
      backgroundImage: {
        'colores-background': "url('../public/images/pink_colores_background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
