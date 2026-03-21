/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080f18",
        primary: "#81ecff",
        secondary: "#a68cff",
        muted: "#a5abb8",
        surface: "rgba(29, 38, 52, 0.4)",
        border: "rgba(66, 72, 83, 0.3)",
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
