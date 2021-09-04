import { styled } from '../styles/theme'

export const List = styled('li', {
  color: 'rgba(0,0,0,.7)',
  margin: '4px 0'
})
export const Ticker = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  marginRight: '8px',

  color: 'rgba(0,0,0,.5)',
  fontSize: '12px'
})
export const Link = styled('a', {
  color: '#1473e6',
  textDecoration: 'none'
})

interface ITimelineItem {
  ticker: string
  status: string
  institute: string
  link: string
}

export const Item = ({ ticker, status, institute, link }: ITimelineItem) => {
  return (
    <>
      <List>
        <Ticker>{ticker}</Ticker>
        {status + ': '}
        <Link href={link} target='_blank'>{institute}</Link>
      </List>
    </>
  )
}
