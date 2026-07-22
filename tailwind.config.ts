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
        bg: '#0B0D10',
        surface: '#111418',
        'card-bg': '#111418',
        'border-default': '#222831',
        accent: {
          DEFAULT: '#4DA3FF',
          hover: '#6BB6FF',
        },
        'text-main': '#FFFFFF',
        'text-muted': '#B3BAC5',
        live: '#22c55e',
        'live-text': '#4ade80',
        warning: '#f59e0b',
        'warning-text': '#fbbf24',
        discord: '#5865F2',
        'discord-hover': '#4752c4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        btn: '12px',
        badge: '999px',
        tag: '4px',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '96px',
      },
      fontSize: {
        'hero': ['clamp(52px,8vw,96px)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'section-heading': ['clamp(28px,4vw,48px)', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.9)' },
        },
        devpulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
      animation: {
        'pulse-badge': 'pulse 2s ease-in-out infinite',
        'pulse-dev': 'devpulse 3s ease-in-out infinite',
      },
      backdropBlur: {
        nav: '12px',
      },
    },
  },
  plugins: [],
}

export default config
