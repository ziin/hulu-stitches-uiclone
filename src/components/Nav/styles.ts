import IndianaDragScroll from 'react-indiana-drag-scroll'
import { styled } from '@styles/stitches'

export const ScrollContainer = styled(IndianaDragScroll, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  height: '$16',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  paddingX: '$10',
  overflowX: 'scroll',

  '@sm': {
    paddingX: '$20',
  },

  '& > * + *': {
    marginLeft: '$10',
    '@sm': {
      marginLeft: '$20',
    },
  },
})

export const Label = styled('h2', {
  fontSize: '$2xl',
  fontWeight: 'normal',
  cursor: 'pointer',
  transition: 'all 100ms ease-in-out',

  '&:hover': {
    color: 'white',
    transform: 'scale(125%)',
  },

  '&:active': {
    color: '$accent',
  },
})

export const FadeBlock = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  height: '$16',
  width: '$1-12',
  background: 'linear-gradient(90deg, transparent 0%, $black-pearl 100%)',
})
