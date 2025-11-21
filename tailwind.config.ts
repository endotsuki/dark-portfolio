import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neon: {
          blue: "rgb(0, 255, 255)",
          purple: "rgb(147, 51, 234)",
          pink: "rgb(236, 72, 153)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cyber: ["Orbitron", "monospace"],
        tech: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(255, 255, 255, 0.4)",
        "glow-xl": "0 0 60px rgba(255, 255, 255, 0.5)",
        "neon-blue": "0 0 30px rgba(0, 255, 255, 0.5)",
        "neon-purple": "0 0 30px rgba(147, 51, 234, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "inner-glow": "inset 0 0 20px rgba(255, 255, 255, 0.1)",
        cyber:
          "0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(0, 255, 255, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #000000 50%, #0a0a0a 75%, #000000 100%)",
        "cyber-grid":
          "linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "text-shimmer":
          "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
        "card-glow":
          "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(0,0%,100%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(0,0%,100%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(0,0%,100%,0.1) 0px, transparent 50%)",
      },
      backgroundSize: {
        grid: "60px 60px",
        "cyber-grid": "40px 40px",
        shimmer: "200% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
