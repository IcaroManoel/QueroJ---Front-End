module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        toptop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        leftleft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        'top-bottom': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
        },
      },
      animation: {
        'rotate-8s': 'rotate 8s linear infinite',
        'toptop-10s': 'toptop 10s ease-in-out infinite',
        'leftleft-10s': 'leftleft 10s ease-in-out infinite',
        'top-bottom': 'top-bottom 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};