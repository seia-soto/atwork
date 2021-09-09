import { styled } from '../styles/theme'
import Container from './Container'
import { contrast } from '../styles/filter'

export const Wrapper = styled('div', {
  height: '100%',

  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundPositionX: 'center',

  variants: {
    layout: {
      featured: {
        backgroundImage: `${contrast}, url(/images/pexels-pixabay-509922.webp)`
      }
    }
  }
})

export const Context = styled(Container, {
  display: 'flex',
  height: '550px',
  maxHeight: 'calc(100vh - 64px)', // NOTE: 100vh - high of navigation bar

  flexDirection: 'column-reverse',

  color: '$black',

  variants: {
    layout: {
      story: {
        height: '400px'
      }
    }
  }
})
