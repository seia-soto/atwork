import { css } from './theme'

export const featured = css({
  '& h1': {
    fontSize: '28px',
    color: '$black'
  },
  '& h3': {
    fontSize: '20px',
    color: '$black600'
  },

  variants: {
    level: {
      lg: {
        '& h2': {
          fontSize: '28px',
          color: '$black600'
        },
        '& h3': {
          fontSize: '22px',
          color: '$black900'
        }
      },
      xl: {
        '& h2': {
          fontSize: '36px',
          color: '$black600'
        },
        '& h3': {
          fontSize: '28px',
          color: '$black900'
        }
      },
      xxl: {
        '& h2': {
          fontSize: '56px',
          color: '$black600'
        },
        '& h3': {
          fontSize: '40px',
          color: '$black900'
        }
      },
      secondary: {
        '& h2': {
          fontSize: '24px',
          color: '$black600'
        },
        '& h3': {
          color: '$black900'
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
