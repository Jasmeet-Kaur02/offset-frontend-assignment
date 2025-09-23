/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.875rem", // small
      base: "1rem", // body2
      lg: "1.125rem", // body1
      xl: "1.25rem", // h6
      "2xl": "1.5rem", // h5
      "3xl": "2rem", //h4
      "4xl": "3rem", // h3
      "5xl": "3.25rem", // h2
      "6xl": "4rem", // h1
      "7xl": "5rem", // h1
      "8xl": "8rem", // big
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xlg: "1336px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        object: ["Roboto"],
        robotoSemibold: ["Roboto-Semibold"],
        robotoMedium: ["Roboto-Medium"],
        robotoNormal: ["Roboto-Regular"],
        robotoBold: ["Roboto-Bold"],
        robotoBlack: ["Roboto-Black"],
        robotoLight: ["Roboto-Light"],
      },
      colors: {
        dark: "#0B0B0B",
        black: "#000",
        blue: "#1976D2",
        blueLight: "#EAFBFF",
        bgLight: "#F5F7FA",
        blueDark: "#020BB5",
        gray: "#9E9E9E",
        lightGreen: "#81C784",
      },
    },
  },
  plugins: [],
};
