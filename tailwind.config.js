/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
  "mytheme": {
    "primary": "#4f70ce",
    "secondary": "#10B981",
    "accent": "#9e9e9e",
    "neutral": "#111827",
    "base-100": "#F3F4F6",
    "info": "#2196F3",
    "success": "#14B8A6",
    "warning": "#FFB020",
    "error": "#D14343"
  }
}],
  },
};