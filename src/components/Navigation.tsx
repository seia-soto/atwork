import Link from 'next/link'
import { styled } from '../styles/theme'
import Container from './Container'

export const Wrapper = styled(Container, {
  display: 'flex',
  padding: '12px'
})

export const Group = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '12px'
})

export const Right = styled(Group, {
  marginLeft: 'auto'
})

export const StyledItem = styled('a', {
  display: 'inline-flex',
  height: '100%',
  color: '$black500',
  textDecoration: 'none',
  margin: 'auto 0',

  justifyContent: 'center',
  alignItems: 'center',

  transition: 'color .3s ease-in-out',

  '&:hover': {
    color: '$black'
  },

  variants: {
    type: {
      featured: {
        color: '$black700',
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
  if (!href) {
    return (
      <StyledItem {...props} />
    )
  }

  return (
    <Link href={href || ''} passHref>
      <StyledItem {...props} />
    </Link>
  )
}
