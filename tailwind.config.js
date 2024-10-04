/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}'
];
export const theme = {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "7rem",
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/image.png')",
      }
    },
};

export const plugins = [];

