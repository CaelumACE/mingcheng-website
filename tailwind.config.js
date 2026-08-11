/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A5F',
        },
        surface: {
          DEFAULT: '#F0F4FF',
          card:   'rgba(255,255,255,0.75)',
          hover:  'rgba(255,255,255,0.90)',
          muted:  '#E8ECF6',
        },
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
          border: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Noto Sans SC"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'float-rev': 'float-rev 10s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'orb-1': 'orb-1 12s ease-in-out infinite',
        'orb-2': 'orb-2 14s ease-in-out infinite',
        'orb-3': 'orb-3 16s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'spin-rev': 'spin-rev 25s linear infinite',
        'dash-flow': 'dash-flow 3s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37,99,235,0.08), 0 0 60px rgba(37,99,235,0.03)' },
          '50%':      { boxShadow: '0 0 35px rgba(37,99,235,0.15), 0 0 80px rgba(37,99,235,0.06)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'float-rev': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(15px) rotate(-3deg)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'orb-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':      { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        'orb-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(-25px, -15px) scale(1.08)' },
          '66%':      { transform: 'translate(20px, -25px) scale(0.92)' },
        },
        'orb-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(20px, 25px) scale(1.06)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-rev': {
          '0%':   { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'dash-flow': {
          '0%':   { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
