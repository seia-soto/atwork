import type { NextPage } from 'next'
import * as Images from '../components/Images'
import * as Navigation from '../components/Navigation'

const NavigationLayout: NextPage = () => {
  return (
    <Navigation.Wrapper size='md'>
      <Navigation.Item type='featured' href='/'>
        <Images.Avatar src='/images/avatar.png' css={{ marginRight: '12px', height: '40px' }} />
        HoJeong Go
      </Navigation.Item>

      <Navigation.Right>
        <Navigation.Item href='/resume'>Resume</Navigation.Item>
        <Navigation.Item href='/stories'>Stories</Navigation.Item>
      </Navigation.Right>
    </Navigation.Wrapper>
  )
}

export default NavigationLayout
