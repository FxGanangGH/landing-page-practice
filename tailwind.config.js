/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: 'hsl(257, 40%, 49%)',
          'soft-magenta': 'hsl(300, 69%, 71%)'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'system-ui']
      },
      maxWidth: {
        'bodytext-mobile': '265px'
      },
      screens: {
        'desktop-lg': '1200px'
      }
    }
  },
  plugins: []
}
