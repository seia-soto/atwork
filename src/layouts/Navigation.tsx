import type { NextPage } from 'next'
import Avatar from '../components/Avatar'
import * as Navigation from '../components/Navigation'

const NavigationLayout: NextPage = () => {
  return (
    <Navigation.Wrapper size='md'>
      <Navigation.Item type='featured' href='/'>
        <Avatar src='/images/avatar.png' css={{ marginRight: '12px', height: '40px' }} />
        HoJeong Go
      </Navigation.Item>

      <Navigation.Right>
        <Navigation.Item href='/resume'>Resume</Navigation.Item>
        <Navigation.Item>Stories</Navigation.Item>
      </Navigation.Right>
    </Navigation.Wrapper>
  )
}

export default NavigationLayout