import { styled } from '../styles/theme'

export const Avatar = styled('img', {
  display: 'inline-block',
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

export const Featured = styled('img', {
  display: 'inline-block',
  width: '100%',
  borderRadius: '12px',
  margin: '16px',
  boxShadow: '0 0 30px -9px rgba(0,0,0,.15)',

  transition: 'box-shadow .4s ease-in-out',

  '&:hover': {
    boxShadow: '0 8px 30px -6px rgba(0,0,0,.4)'
  }
})
