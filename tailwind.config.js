/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#FAF9F6',
          DEFAULT: '#FAF6EE',
          dark: '#F3EDE0',
        },
        forest: {
          light: '#2a5a3f',
          DEFAULT: '#1b3e2b',
          dark: '#11281b',
        },
        gold: {
          light: '#e6c865',
          DEFAULT: '#d4af37',
          dark: '#b08e28',
        },
        charcoal: {
          light: '#424f4a',
          DEFAULT: '#2c3531',
          dark: '#1b211e',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
