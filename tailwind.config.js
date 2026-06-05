/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        foreground: "var(--text-primary)",
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "var(--text-secondary)",
        },
        primary: {
          DEFAULT: "var(--accent-color)",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "var(--text-primary)",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "var(--border-color)",
        input: "var(--border-color)",
        ring: "var(--accent-color)",
      }
    },
  },
  plugins: [],
}
