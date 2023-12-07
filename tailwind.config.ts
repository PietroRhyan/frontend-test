import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F2EBF4",
        "bg-gray": "#E4E4E4",

        "light-text": "#7A7A7A",
        text: "#4D4949",
        "dark-text": "#1E1E1E",

        "light-purple": "#D987FF",
        purple: "#C548FF",
        "dark-purple": "#5D0786"
      }
    },
  },
  plugins: [],
}
export default config
