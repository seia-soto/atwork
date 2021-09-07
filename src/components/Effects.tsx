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
        color: '#2a5298'
      },
      pink: {
        color: '#ffdde1'
      }
    }
  }
})

export const Gradient = styled(Base, {
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',

  variants: {
    color: {
      blue: {
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)'
      },
      pink: {
        backgroundImage: 'linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)'
      }
    }
  }
})

export const Featured = styled('a', {
  color: 'inherit',
  borderBottom: '1px solid $black200',

  '&:hover': {
    borderBottom: '1px solid $black'
  }
})
