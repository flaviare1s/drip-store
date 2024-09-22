/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    ".swiper",
    ".swiper-initialized",
    ".swiper-horizontal",
    ".swiper-backface-hidden",
    ".mySwiper",
    ".swiper-pagination",
    ".swiper-pagination-bullet",
    ".swiper-pagination-bullet-active",
    ".hero-height",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#C92071",
        secondary: "#B5B6F2",
        tertiary: "#991956",
        error: "#EE4266",
        success: "#52CA76",
        warning: "#F6AA1C",
        warning_hover: "#CF8900",
        "dark-gray": "#1F1F1F",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666",
        "light-gray": "#8F8F8F",
        "light-gray-2": "#CCCCCC",
        "light-gray-3": "#F5F5F5",
        "light-blue": "#D8E3F2",
        "light-purple": "#E2E3FF",
        white: "#FFFFFF",
        bright_yellow: "#E7FF86",
      },
      screens: {
        cel: "760px",
      }
    },
  },
  plugins: [],
};
