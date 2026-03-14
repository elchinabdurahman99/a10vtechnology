import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — maps to CSS variables for theme switching
        background: '#06080f',
        surface:    '#0c1018',
        surfaceUp:  '#111827',
        border:     '#1e2d40',
        borderHi:   '#2d4a6b',
        // Text
        textPrimary:   '#f0f4f8',
        textSecondary: '#8fa3bc',
        textMuted:     '#4a6280',
        // Accent (same in both themes)
        accent:     '#2563eb',
        accentHi:   '#3b82f6',
        accentSoft: '#1d3a6e',
        // Teal secondary (same in both themes)
        teal:       '#0d9488',
        tealSoft:   '#0f3a36',
      },
      fontFamily: {
        display: ['"Dosis"', 'sans-serif'],
        body:    ['"Dosis"', 'sans-serif'],
        mono:    ['"Dosis"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(30,45,64,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,64,0.4) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.15), transparent)',
        'card-glow': 'linear-gradient(135deg, rgba(37,99,235,0.04), transparent)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}

export default config
