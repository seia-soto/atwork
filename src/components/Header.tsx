import { styled } from '../styles/theme'

export const Wrapper = styled('div', {
  height: '100%',

  variants: {
    layout: {
      main: {
        color: 'white',
        backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'
      }
    }
  }
})

export const Context = styled('div', {
  display: 'flex',
  height: '450px',
  maxHeight: '100%',
  padding: '25px',

  flexDirection: 'column-reverse',

  variants: {
    layout: {
      sub: {
        height: '250px'
      }
    }
  }
})
