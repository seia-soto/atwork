import { styled } from '../styles/theme'
import Container from './Container'

export const Wrapper = styled(Container, {
  maxWidth: '450px'
})

export const Box = styled('div', {
  display: 'flex',
  padding: '20px',
  margin: '12px 0',
  border: '1px solid rgba(0,0,0,.4)',
  borderRadius: '16px',

  width: '100%',
  minHeight: '250px',

  flexDirection: 'column',
  justifyContent: 'space-between',

  backdropFilter: 'blur(45px)',
  boxShadow: '0 16px 55px -9px rgba(0,0,0,.4)',

  '& p,h1,h2,h3,h4,h5,h6': {
    margin: '0.5em 0',
    marginTop: 0
  },

  variants: {
    theme: {
      dark: {
        color: 'rgba(255,255,255,.85)',
        border: '1px solid rgba(255,255,255,.4)',
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0,.15))'
      },
      light: {
        color: 'rgba(0,0,0,.85)',
        border: '1px solid rgba(0,0,0,.4)',
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.15), rgba(255,255,255,.15))'
      }
    }
  }
})
