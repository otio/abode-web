// import colors from 'windicss/colors'

export default {
  theme: {
    screens: {
      xs: { max: '360px' },
      sm: { max: '640px', min: '361px' },
      md: { max: '768px', min: '641px' },
      lg: { max: '1024px', min: '769px' },
      xl: { max: '1280px', min: '1025px' },
      '2xl': { max: '1536px', min: '1281px' },
      hd: { max: '1920px', min: '1537px' },
    },
    colors: {
      black: `#231F20`,
      white: '#ffffff',
      'firebrick': '#CD1815',
    },
    fontFamily: {
      display: ['Acme Gothic'],
      secondary: ['Hanuman', 'Verdana'],
      body: ['Roboto', 'Arial']
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    spacing: {
      // 128: '32rem',
      // 144: '36rem',
    },
    borderRadius: {
      // '4xl': '2rem',x`
    },
  },
}
