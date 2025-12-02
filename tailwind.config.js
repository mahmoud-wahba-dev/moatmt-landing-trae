// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx}", 
    "./pages/**/*.{js,jsx}", 
    "./components/**/*.{js,jsx}"
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Use your preferred themes
    rtl: true, // Enables RTL for Arabic support
  },
}
