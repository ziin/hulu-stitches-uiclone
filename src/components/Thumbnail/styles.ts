import { styled } from '@styles/stitches'

export const Info = styled('div', {
  padding: '$2',
})

export const Title = styled('h2', {
  marginTop: '$1',
  color: 'white',
  fontWeight: 'normal',
  transition: 'all 100ms ease-in-out',

  '&:hover': {
    fontWeight: 'bold',
  },
})
export const Overview = styled('p', {
  maxWidth: '$md',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
})

export const Details = styled('p', {
  display: 'flex',
  alignItems: 'center',
  visibility: 'hidden',

  '& svg': {
    height: '$5',
    marginX: '$2',
  },
})

export const Container = styled('div', {
  padding: '$2',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'transform 200ms ease-in',

  '@sm': {
    '&:hover': {
      transform: 'scale(105%)',
      zIndex: 50,
    },
  },

  [`&:hover ${Title}`]: {
    fontWeight: 'bold',
  },

  [`&:hover ${Details}`]: {
    visibility: 'visible',
  },
})
