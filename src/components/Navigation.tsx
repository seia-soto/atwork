import { styled } from '../styles/theme'
import Container from './Container'

export const Wrapper = styled(Container, {
  display: 'flex',
  padding: '16px',
  background: 'transprent'
})

export const Right = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  marginLeft: 'auto',
  gap: '14px'
})
export const Item = styled('a', {
  display: 'inline-flex',
  height: '100%',
  color: 'inherit',
  textDecoration: 'none',

  justifyContent: 'center',
  alignItems: 'center',

  transition: 'color .3s ease-in-out',

  '&:hover': {
    color: '#2A82CB'
  }
})
