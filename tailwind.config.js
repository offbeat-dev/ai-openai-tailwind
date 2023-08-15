/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1c1c1c",
        yellow: "#ffb800",
        white: "#ffffff",
      },
      //     backgroundImage: {
      //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //       "gradient-conic":
      //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //     },
      //     fontFamily: {
      //       mono: ["var(--font-roboto-mono)"],
      //       titillium: ["var(--font-titillium-web)"],
      //     },
    },
  },
  plugins: [],
};
