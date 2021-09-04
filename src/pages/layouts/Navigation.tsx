import type { NextPage } from 'next'
import Avatar from '../components/Avatar'
import Container from '../components/Container'
import * as Navigation from '../components/Navigation'

const NavigationLayout: NextPage = () => {
  return (
    <Container size='sm'>
      <Navigation.Wrapper>
        <Avatar src='/images/avatar.png' />

        <Navigation.Right>
          <Navigation.Item>Resume</Navigation.Item>
          <Navigation.Item>Reports</Navigation.Item>
        </Navigation.Right>
      </Navigation.Wrapper>
    </Container>
  )
}

export default NavigationLayout
