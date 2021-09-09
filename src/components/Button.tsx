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

  color: '$black600',

  '&:hover': {
    color: '$black'
  },

  variants: {
    invertion: {
      true: {
        color: '$white600',

        '&:hover': {
          color: '$white'
        }
      }
    }
  }
})

export const IconWrapper = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 8px',
  fontSize: '1.4em'
})

interface IIconButtonComponent {
  icon: IconType
  href: string
  left?: boolean

  [keys: string]: unknown
}

export const Icon = ({ icon: Icon, href, left, children, ...props }: IIconButtonComponent) => {
  return (
    <Link href={href} passHref>
      <Featured {...props}>
        {
          left && (
            <IconWrapper>
              <Icon />
            </IconWrapper>
          )
        }
        {children}
        {
          !left && (
            <IconWrapper>
              <Icon />
            </IconWrapper>
          )
        }
      </Featured>
    </Link>
  )
}
