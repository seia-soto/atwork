import { styled } from '../styles/theme'

export const Item = styled('section', {
  paddingBottom: '14px',

  '& p': {
    margin: 0
  }
})

export const Group = styled('section', {
  display: 'flex',
  justifyContent: 'space-around',

  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    align: {
      left: {
        alignItems: 'flex-start'
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }
})
