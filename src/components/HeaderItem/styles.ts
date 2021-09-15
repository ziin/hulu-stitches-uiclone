import { styled } from '@styles/stitches'
import { bounce } from '../../../styles/animations'

export const Title = styled('p', {
  letterSpacing: '$tracking-widest',
  visibility: 'hidden',
})

export const Container = styled('div', {
  width: '$12',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',

  '@sm': {
    width: '$20',
  },

  '&:hover': {
    color: 'white',
  },

  [`&:hover ${Title}`]: {
    visibility: 'visible',
  },

  '& svg': {
    height: '$8',
    marginBottom: '$1',
  },

  '&:hover svg': {
    animation: `${bounce} 1s infinite`,
  },
})
