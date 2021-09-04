import { styled } from '../styles/theme'

const Container = styled('div', {
  margin: '0 auto',
  width: '100%',
  padding: '20px',
  paddingBottom: 0,
  boxSizing: 'border-box',

  variants: {
    size: {
      xl: {
        maxWidth: '1200px'
      },
      lg: {
        maxWidth: '1000px'
      },
      md: {
        maxWidth: '900px'
      },
      sm: {
        maxWidth: '750px'
      },
      xs: {
        maxWidth: '550px'
      }
    }
  }
})

export default Container
