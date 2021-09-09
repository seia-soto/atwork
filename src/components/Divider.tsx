import { styled } from '../styles/theme'

export const Full = styled('div', {
  background: '$black200',
  height: '1px',
  maxWidth: '100%',

  variants: {
    invertion: {
      true: {
        background: '$white200'
      }
    }
  }
})
