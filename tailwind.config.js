
/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundColor: {
          'accent-color-02': 'var(--accent-color-02, #C6F0F8)',
        },
        backgroundColor: {
          'gray-01': '#F9F9F9',
        },
        colors: {
          'accent-color-main': 'var(--accent-color-main, #0E606E)',
        },
      },
    },
    variants: {},
    plugins: [],
  }