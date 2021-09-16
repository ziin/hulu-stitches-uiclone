import { styled } from '@styles/stitches'

export const FlipMove = styled('div', {
  marginY: '$10',

  '@sm': {
    paddingX: '$2',
    display: 'grid',
  },

  '@md': {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  },

  '@lg': {
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
  },

  '@4k': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})
