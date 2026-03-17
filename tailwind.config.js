/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#05060b",
          charcoal: "#0d111f",
          panel: "#11182c",
          accent: "#f6c76e",
          teal: "#6fdad3",
          rose: "#f38ba4",
          muted: "#9aa9c4",
          line: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Sora", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(111,218,211,0.24)",
        float: "0 25px 70px rgba(5,6,11,0.55)",
      },
      backgroundImage: {
        "hero-aurora":
          "radial-gradient(circle at 15% 20%, rgba(111,218,211,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(243,200,120,0.2), transparent 40%)",
        "mesh-layers":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      },
    },
  },
  plugins: [],
};
