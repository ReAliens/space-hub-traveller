module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        moveLeft: 'moveLeft 1.3s ease-in-out',
      },
      keyframes: {
        moveLeft: {
          '0%': { right: '-50%' },
          '100%': { right: '0' },
        },
      },
    },
  },
  plugins: [],
};
