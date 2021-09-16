import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      'black-pearl': '#06202A',
      text: '#D1D5DB',
      accent: '#f56565',
    },
    sizes: {
      1: '0.25rem',
      2: '0.5rem',
      5: '1.25rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      md: '28rem',
      '2xl': '45rem',
      '1-12': '8.333333%',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      5: '1.25rem',
      10: '2.5rem',
      20: '5rem',
    },
    lineHeights: {
      normal: 1.5,
    },
    fontSizes: {
      base: '1rem',
      '2xl': '1.5rem',
    },
    letterSpacings: {
      'tracking-widest': '0.1em',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    '4k': '(min-width: 2000px)',
  },

  utils: {
    paddingX: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: 'ui-sans-serif, system-ui',
    backgroundColor: '$black-pearl',
    color: '$text',
    lineHeight: '$normal',
  },
})
