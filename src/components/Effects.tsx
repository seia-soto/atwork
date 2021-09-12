import { styled } from '../styles/theme'

export const Base = styled('span', {})

/* Thanks to: https://stackoverflow.com/a/64127605 */
export const Highlighter = styled(Base, {
  margin: '0 -0.4em',
  padding: '0 0.4em',
  borderRadius: '0.8em 0.3em',
  background: 'transparent',
  backgroundImage: 'linear-gradient(to right, rgba(255,225,0,.1), rgba(255,225,0,.7) 12%,rgba(255,225,0,.3))',
  boxDecorationBlock: 'clone'
})

export const Colored = styled(Base, {
  variants: {
    color: {
      blue: {
        color: '$blue400'
      }
    }
  }
})

export const Featured = styled('a', {
  color: 'inherit',
  borderBottom: '1px solid $black400',

  '&:hover': {
    borderBottom: '1px solid $black'
  },

  variants: {
    invertion: {
      true: {
        borderBottom: '1px solid $white400',

        '&:hover': {
          borderBottom: '1px solid $white'
        }
      }
    }
  }
})
