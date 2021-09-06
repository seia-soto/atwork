import { css } from './theme'

export const featured = css({
  '& h1': {
    fontSize: '28px'
  },
  '& h3': {
    fontSize: '20px',
    color: 'rgba(0,0,0,.6)'
  },

  variants: {
    level: {
      xl: {
        '& h2': {
          fontSize: '36px',
          color: 'rgba(0,0,0,.6)'
        },
        '& h3': {
          fontSize: '28px',
          color: 'rgba(0,0,0,.9)'
        }
      },
      xxl: {
        '& h2': {
          fontSize: '56px',
          color: 'rgba(0,0,0,.6)'
        },
        '& h3': {
          fontSize: '40px',
          color: 'rgba(0,0,0,.9)'
        }
      },
      secondary: {
        '& h2': {
          fontSize: '24px',
          color: 'rgba(0,0,0,.6)'
        },
        '& h3': {
          color: 'rgba(0,0,0,.9)'
        }
      }
    },
    align: {
      right: {
        textAlign: 'end'
      }
    },
    pad: {
      featured: {
        margin: '56px 0'
      }
    }
  }
})
