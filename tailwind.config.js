export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf3f4',
          100: '#f4e3e5',
          200: '#e9c7cc',
          300: '#d69ba4',
          400: '#bd6a77',
          500: '#a04a58',
          600: '#7a3039',
          700: '#682a32',
          800: '#58262d',
          900: '#4c232a',
        },
        cream: {
          DEFAULT: '#fbf8f2',
          dark: '#f3ede1',
        },
        ink: '#242424',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -20px rgba(36, 36, 36, 0.35)',
        card: '0 12px 30px -18px rgba(36, 36, 36, 0.28)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        marquee: 'marquee 50s linear infinite',
      },
    },
  },
  plugins: [],
}
