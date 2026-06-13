/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FAFAFA',
          red: '#FA2D48',
          text: '#1D1D1F',
          gray: '#86868B',
          card: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'PingFang SC',
          'Microsoft YaHei',
          'system-ui',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}
