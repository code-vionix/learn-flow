/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // For your custom components
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          900: "hsl(var(--primary-900))",
          800: "hsl(var(--primary-800))",
          700: "hsl(var(--primary-700))",
          600: "hsl(var(--primary-600))",
          500: "hsl(var(--primary-500))",
          400: "hsl(var(--primary-400))",
          300: "hsl(var(--primary-300))",
          200: "hsl(var(--primary-200))",
          100: "hsl(var(--primary-100))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          900: "hsl(var(--secondary-900))",
          800: "hsl(var(--secondary-800))",
          700: "hsl(var(--secondary-700))",
          600: "hsl(var(--secondary-600))",
          500: "hsl(var(--secondary-500))",
          400: "hsl(var(--secondary-400))",
          300: "hsl(var(--secondary-300))",
          200: "hsl(var(--secondary-200))",
          100: "hsl(var(--secondary-100))",
        },
        success: {
          900: "hsl(var(--success-900))",
          800: "hsl(var(--success-800))",
          700: "hsl(var(--success-700))",
          600: "hsl(var(--success-600))",
          500: "hsl(var(--success-500))",
          400: "hsl(var(--success-400))",
          300: "hsl(var(--success-300))",
          200: "hsl(var(--success-200))",
          100: "hsl(var(--success-100))",
        },
        warning: {
          900: "hsl(var(--warning-900))",
          800: "hsl(var(--warning-800))",
          700: "hsl(var(--warning-700))",
          600: "hsl(var(--warning-600))",
          500: "hsl(var(--warning-500))",
          400: "hsl(var(--warning-400))",
          300: "hsl(var(--warning-300))",
          200: "hsl(var(--warning-200))",
          100: "hsl(var(--warning-100))",
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },

        danger: {
          900: "hsl(var(--danger-900))",
          800: "hsl(var(--danger-800))",
          700: "hsl(var(--danger-700))",
          600: "hsl(var(--danger-600))",
          500: "hsl(var(--danger-500))",
          400: "hsl(var(--danger-400))",
          300: "hsl(var(--danger-300))",
          200: "hsl(var(--danger-200))",
          100: "hsl(var(--danger-100))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
