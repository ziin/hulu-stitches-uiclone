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
    },
    sizes: {
      1: '0.25rem',
      2: '0.5rem',
      8: '2rem',
      12: '3rem',
      20: '5rem',
      '2xl': '45rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      5: '1.25rem',
    },
    lineHeights: {
      normal: 1.5,
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
