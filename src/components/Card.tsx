import { styled } from '../styles/theme'

export const Group = styled('div', {
  display: 'flex',

  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',

  gap: '16px'
})

export const Item = styled('div', {
  display: 'inline-block',
  width: 'auto',
  maxWidth: 'calc(50% - 8px)', // NOTE: (100 / maxItemSize)% - (parentGapSize / 2)px

  padding: '16px',
  borderRadius: '16px',

  background: '$black200',
  color: '$black',

  '& > *': {
    margin: '3.5px 0',
    padding: 0
  }
})
