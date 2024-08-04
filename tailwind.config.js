/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'dark-mode-input': '#25273D',
        'linear-gradient-1': 'hsl(192, 100%, 67%)',
        'linear-gradient-2': 'hsl(280, 87%, 65%)',
      },
      screens: {
        'tablet': '376px',
      },
    },
  },
  plugins: [],
}
