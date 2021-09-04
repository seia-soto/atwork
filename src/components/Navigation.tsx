import Link from 'next/link'
import { styled } from '../styles/theme'
import Container from './Container'

export const Wrapper = styled(Container, {
  display: 'flex',
  padding: '16px',
  background: 'transprent'
})

export const Right = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  marginLeft: 'auto',
  gap: '14px'
})
export const StyledItem = styled('a', {
  display: 'inline-flex',
  height: '100%',
  color: 'rgba(0,0,0,.5)',
  textDecoration: 'none',

  justifyContent: 'center',
  alignItems: 'center',

  transition: 'color .3s ease-in-out',

  '&:hover': {
    color: 'black'
  },

  variants: {
    type: {
      featured: {
        color: 'rgba(0,0,0,.7)',
        fontWeight: 600,
        fontSize: '17.5px'
      }
    }
  }
})

interface ILinkComponentProps {
  href?: string
  [keys: string]: unknown
}

export const Item = ({ href, ...props }: ILinkComponentProps) => {
  return (
    <Link href={href || ''} passHref>
      <StyledItem {...props} />
    </Link>
  )
}
