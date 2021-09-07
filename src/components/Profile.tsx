import { styled } from '../styles/theme'
import Container from './Container'

export const Wrapper = styled(Container, {
  maxWidth: '450px'
})

export const Box = styled('div', {
  display: 'flex',
  padding: '20px',
  margin: '12px 0',
  border: '1px solid $black400',
  borderRadius: '16px',

  width: '100%',
  minHeight: '250px',

  flexDirection: 'column',
  justifyContent: 'space-between',

  color: '$black900',
  backgroundImage: 'linear-gradient(to right, $white200, $white200)',
  backdropFilter: 'blur(45px)',
  boxShadow: '0 16px 55px -9px rgba(0,0,0,.4)', // NOTE: Token N/A

  '& p,h1,h2,h3,h4,h5,h6': {
    margin: '0.5em 0',
    marginTop: 0
  }
})
