/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { bg:"#0f172a", fg:"#e2e8f0", muted:"#94a3b8", accent:"#22d3ee", card:"#111827" }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
