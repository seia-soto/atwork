import { styled } from '../styles/theme'
import Container from './Container'

export const Wrapper = styled('div', {
  height: '100%',

  variants: {
    layout: {
      featured: {
        backgroundImage: 'linear-gradient(to bottom, $white700, $white700), url(/images/pexels-pixabay-509922.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundPositionX: 'center'
      }
    }
  }
})

export const Context = styled(Container, {
  display: 'flex',
  height: '550px',
  maxHeight: 'calc(100vh - 64px)', // NOTE: 100vh - high of navigation bar

  flexDirection: 'column-reverse',

  color: '$black'
})
