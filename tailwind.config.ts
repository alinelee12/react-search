import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#BD5923", 
        secondary: "#286592",
        whatsapp:"#1B994A",
        success: "#114e0b",
        warning: "#FBBF24",
        error: "#EF4444",
      },
    },
  },
  safelist:[
    'bg-blue-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-green-500',
    'bg-orange-600',
    'bg-cyan-400',
    'bg-amber-500',
    'bg-lime-500',
    'bg-green-600',
    'bg-cyan-500',
    'bg-cyan-800',
    'bg-cyan-700',
    'bg-indigo-800',
    'bg-blue-600',
    'bg-violet-600',
    'bg-fuchsia-600',
    'bg-pink-600',
    'bg-rose-500',
    'bg-red-950',
    'bg-emerald-800',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-sky-400',
  ],
  plugins: [],
} satisfies Config;
