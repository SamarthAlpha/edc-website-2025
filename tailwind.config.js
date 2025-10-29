// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom colors
      colors: {
        primary: '#6366f1',
        secondary: '#ec4899',
        accent: '#f59e0b',
        dark: '#0f172a',
        darker: '#020617',
        light: '#f8fafc',
      },
      // Add your custom animations
      animation: {
        'logo-float': 'logo-float 3s ease-in-out infinite',
        'logo-pulse': 'logo-pulse 4s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
        'rotate-border': 'rotate-border 4s linear infinite',
        'icon-spin': 'icon-spin 0.6s ease',
        'verticalScroll': 'verticalScroll 1s linear infinite',  // Duration will be overridden in the component
        'logo-entrance-then-pulse': 'logo-entrance 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards, logo-pulse 4s ease-in-out 1.5s infinite',
      },
      // Add your custom keyframes
      keyframes: {
        'logo-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // Replace the old 'logo-pulse' keyframes...
        'logo-pulse': {
          '0%, 100%': {
            transform: 'scale(1) translateY(0)',
            filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.7))',
          },
          '50%': {
            transform: 'scale(1.05) translateY(-8px)', // Gently scale up and float
            filter: 'drop-shadow(0 0 70px rgba(236, 72, 153, 0.9)) drop-shadow(0 0 90px rgba(99, 102, 241, 0.5))', // More intense glow
          },
        },
        'scroll': {
          to: { transform: 'translateX(calc(-50% - 1.5rem))' },
        },
        'rotate-border': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'icon-spin': {
          'from': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          'to': { transform: 'rotate(360deg) scale(1)' },
        },
        'verticalScroll': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-50%)' },
        },
        'logo-entrance': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3) rotate(-15deg) translateY(50px)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale(1.1) rotate(5deg) translateY(-10px)',
          },
          '80%': {
            transform: 'scale(0.98) rotate(-2deg) translateY(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) rotate(0deg) translateY(0)',
            filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.7))',
          },
        },
      },
    },
  },
  plugins: [],
}