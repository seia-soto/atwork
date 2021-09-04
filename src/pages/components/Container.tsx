import { styled } from '@stitches/react'

const Container = styled('div', {
  margin: '0 auto',
  maxWidth: '900px',
  padding: '20px',
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
