/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E6DBF",       // Stitch blue
        secondary: "#E8475F",     // Hibiscus pink/red
        accent: "#FFD166",        // Tropical sunset gold
        background: "#FFF8F0",    // Warm Hawaiian sand
        stitch: {
          light: "#6BB5FF",       // Stitch light fur
          DEFAULT: "#2E6DBF",     // Stitch body
          dark: "#1A365D",        // Stitch dark accents
        },
        lilo: {
          coral: "#FF6B6B",       // Lilo's warmth
          sunset: "#FF8C42",      // Hawaiian sunset
        },
        tropical: {
          green: "#38A169",       // Palm leaf
          teal: "#0891B2",        // Ocean water
          sand: "#F5E6D3",        // Beach sand
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
