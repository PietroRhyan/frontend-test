import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F5F5F5',

        bg: '#F2EBF4',
        'bg-gray': '#E4E4E4',

        'light-text': '#7A7A7A',
        text: '#4D4949',
        'dark-text': '#1E1E1E',

        'light-purple': '#D987FF',
        purple: '#C548FF',
        'dark-purple': '#5D0786',

        'light-green': '#02DE40',
        green: '#09B73A',
        'dark-green': '#013D0A',

        'light-red': '#FF8585',
        red: '#E52020',
        'dark-red': '#9F1A1A',
      },
      boxShadow: {
        thin: '0 4px 10px 0 #00000005, 0 2px 2px 0 #00000015',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      slg: '845px',
      lg: '976px',
      lgp: '1024px',
      'custom-lgp': '1150px',
      xl: '1440px',
    },
  },
  plugins: [],
}
export default config
