import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9f9fb',
          100: '#f3f3f7',
          200: '#e8e8f0',
          300: '#d5d5e0',
          400: '#b0b0c3',
          500: '#8080a0',
          600: '#4d4d70',
          700: '#2a2a40',
          800: '#0B0B0F',
          900: '#050507',
        },
        gold: {
          50: '#fffbea',
          100: '#fff3c0',
          200: '#ffe680',
          300: '#ffd940',
          400: '#ffc400',
          500: '#ffb800',
          600: '#ff9c00',
          700: '#ff8c00',
          800: '#ff7a00',
          900: '#ff6900',
        },
      },
      backgroundImage: {
        'gradient-gold-orange': 'linear-gradient(135deg, #ffc400 0%, #ff8c00 100%)',
        'gradient-purple-orange': 'linear-gradient(135deg, #a855f7 0%, #ff8c00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0B0B0F 0%, #1a1a2e 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 184, 0, 0.4)',
        'glow-lg': '0 0 40px rgba(255, 184, 0, 0.6)',
        glass: '0 8px 32px 0 rgba(255, 192, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 184, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 184, 0, 0.8)' },
        },
        'slide-up': {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
