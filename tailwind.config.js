/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecdc',
          200: '#fbd4b8',
          300: '#f7b589',
          400: '#f28958',
          500: '#ef6934',
          600: '#e0522a',
          700: '#ba4025',
          800: '#933426',
          900: '#762d22',
        },
        gold: {
          50: '#fffdf2',
          100: '#fffce5',
          200: '#fff8c6',
          300: '#ffeb9c',
          400: '#ffd96b',
          500: '#ffc53d',
          600: '#f0a410',
          700: '#d1840b',
          800: '#a3650d',
          900: '#86540f',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'parallax': 'parallax 20s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        parallax: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}