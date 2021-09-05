import type { IconType } from 'react-icons'
import Link from 'next/link'
import { styled } from '../styles/theme'

export const Base = styled('a', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Primary = styled(Base, {
  padding: '9px 22px',
  background: 'blue',
  color: 'white',

  textAlign: 'center'
})

export const Featured = styled(Base, {
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  transitionProperty: 'color',

  color: 'rgba(0,0,0,.55)',

  '&:hover': {
    color: 'rgba(0,0,0,.9)'
  }
})

export const IconWrapper = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '8px',
  fontSize: '1.4em'
})

interface IIconButtonComponent {
  icon: IconType
  href: string

  [keys: string]: unknown
}

export const Icon = ({ icon: Icon, href, children, ...props }: IIconButtonComponent) => {
  return (
    <Link href={href} passHref>
      <Featured {...props}>
        {children}
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </Featured>
    </Link>
  )
}
