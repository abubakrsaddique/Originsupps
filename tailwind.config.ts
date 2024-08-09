/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "white",
      black: "black",
      lightgreen: "rgb(196,255,46)",
      gray: "rgb(128,129,134)",
      lightgray: "rgb(201,201,201)",
      secondary: "rgb(231,231,231)",
      "custom-hsla1": "hsla(40, 32%, 93%, 0)",
      "custom-hsla2": "hsla(40, 32%, 93%, 0.63)",
      "custom-f2eee6": "#f2eee6",
    },
    screens: {
      lg: { max: "1024px" },
      tab: { max: "991px" },
      mob: { max: "768px" },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        organetto: ["var(--font-organetto)"],
      },
    },
  },

  plugins: [],
};
