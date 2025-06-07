module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // <-- add this
    "./app/**/*.{js,ts,jsx,tsx}"         // <-- if using Next.js 13+ with app dir
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
