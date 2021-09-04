import { styled } from '@stitches/react'
import Container from './Container'

export const Wrapper = styled(Container, {
  display: 'flex',
  padding: '16px'
})

export const Right = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  marginLeft: 'auto',
  gap: '14px'
})
export const Item = styled('div', {
  display: 'inline-flex',
  height: '100%',

  justifyContent: 'center',
  alignItems: 'center'
})
