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
    animation: {
      "meteor-effect": "meteor 5s linear infinite",
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
    },
    
    extend: {
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
      // keyframes: {
      //   "accordion-down": {
      //     from: {
      //       height: "0",
      //     },
      //     to: {
      //       height: "var(--radix-accordion-content-height)",
      //     },
      //   },
      //   "accordion-up": {
      //     from: {
      //       height: "var(--radix-accordion-content-height)",
      //     },
      //     to: {
      //       height: "0",
      //     },
      //   },
      //   "typing": {
      //     "0%": { width: "0" },
      //     "100%": { width: "100%" }
      //   },
      //   "blink": {
      //     "0%, 50%": { borderColor: "transparent" },
      //     "51%, 100%": { borderColor: "white" }
      //   },
      //   "glow": {
      //     "0%, 100%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)" },
      //     "50%": { boxShadow: "0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.4)" }
      //   },
      //   "pulse-glow": {
      //     "0%, 100%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.4)" },
      //     "50%": { boxShadow: "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4)" }
      //   },
      //   "slide-up": {
      //     "0%": { transform: "translateY(100%)", opacity: "0" },
      //     "100%": { transform: "translateY(0)", opacity: "1" }
      //   },
      //   "float": {
      //     "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
      //     "50%": { transform: "translateY(-20px) rotate(1deg)" }
      //   },
      //   "gradient-shift": {
      //     "0%, 100%": { backgroundPosition: "0% 50%" },
      //     "50%": { backgroundPosition: "100% 50%" }
      //   },
      //   "matrix-rain": {
      //     "0%": { transform: "translateY(-100vh)" },
      //     "100%": { transform: "translateY(100vh)" }
      //   },
      //   "cyber-pulse": {
      //     "0%, 100%": {
      //       boxShadow: "0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)",
      //       borderColor: "rgba(0, 255, 255, 0.3)"
      //     },
      //     "50%": {
      //       boxShadow: "0 0 40px rgba(0, 255, 255, 0.8), inset 0 0 40px rgba(0, 255, 255, 0.3)",
      //       borderColor: "rgba(0, 255, 255, 0.8)"
      //     }
      //   },
      //   "text-shimmer": {
      //     "0%": { backgroundPosition: "-200% center" },
      //     "100%": { backgroundPosition: "200% center" }
      //   },
      //   "particle-float": {
      //     "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
      //     "25%": { transform: "translateY(-20px) translateX(10px)" },
      //     "50%": { transform: "translateY(-10px) translateX(-10px)" },
      //     "75%": { transform: "translateY(-30px) translateX(5px)" }
      //   },
      //   "scan-line": {
      //     "0%": { transform: "translateX(-100%)" },
      //     "100%": { transform: "translateX(100vw)" }
      //   },
      //   "scale-in": {
      //     "0%": { transform: "scale(0.8)", opacity: "0" },
      //     "100%": { transform: "scale(1)", opacity: "1" }
      //   },
      //   "fade-in-up": {
      //     "0%": { transform: "translateY(20px)", opacity: "0" },
      //     "100%": { transform: "translateY(0)", opacity: "1" }
      //   },
      //   "bounce-in": {
      //     "0%": { transform: "scale(0.3)", opacity: "0" },
      //     "50%": { transform: "scale(1.05)" },
      //     "70%": { transform: "scale(0.9)" },
      //     "100%": { transform: "scale(1)", opacity: "1" }
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      //   "typing": "typing 3.5s steps(40, end), blink 0.75s step-end infinite",
      //   "glow": "glow 3s ease-in-out infinite",
      //   "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      //   "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      //   "float": "float 6s ease-in-out infinite",
      //   "gradient-shift": "gradient-shift 3s ease-in-out infinite",
      //   "matrix-rain": "matrix-rain 1s linear infinite",
      //   "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
      //   "text-shimmer": "text-shimmer 2s linear infinite",
      //   "particle-float": "particle-float 4s ease-in-out infinite",
      //   "scan-line": "scan-line 2s linear infinite",
      //   "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      //   "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      //   "bounce-in": "bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      // },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
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
