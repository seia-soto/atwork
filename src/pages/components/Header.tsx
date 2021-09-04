import { styled } from '@stitches/react'

export const Wrapper = styled('div', {
  height: '100%',
  color: 'white',

  backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'
})

export const Context = styled('div', {
  display: 'flex',
  height: '450px',
  maxHeight: '100%',
  padding: '25px',

  flexDirection: 'column-reverse'
})
