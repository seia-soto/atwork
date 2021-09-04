import { styled } from '@stitches/react'

const Avatar = styled('img', {
  display: 'inline',
  height: '45px',
  borderRadius: '50%',

  variants: {
    size: {
      xl: {
        height: '72px'
      },
      lg: {
        height: '56px'
      },
      md: {
        height: '45px'
      },
      sm: {
        height: '32px'
      },
      xs: {
        height: '15px'
      }
    }
  }
})

export default Avatar
