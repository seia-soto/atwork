import { styled } from '../styles/theme'

export const Featured = styled('div', {
  background: '#2A82CB',
  height: '8px',
  width: '50px'
})

export const Full = styled('div', {
  background: 'rgba(0,0,0,.4)',
  height: '1px',
  maxWidth: '100%',
  width: '400px',
  margin: '28px auto',

  variants: {
    location: {
      left: {
        marginLeft: 0
      }
    }
  }
})
