import { styled } from '@styles/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'auto',
  margin: '$5',

  '@sm': {
    flexDirection: 'row',
  },
})

export const HeaderItems = styled('div', {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-evenly',
  maxWidth: '$2xl',
})
