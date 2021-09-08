import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { MdInvertColors } from 'react-icons/md'
import * as Images from '../components/Images'
import * as Navigation from '../components/Navigation'
import * as atoms from '../atoms'

const NavigationLayout: NextPage = () => {
  const [light, setLight] = useRecoilState(atoms.light)

  const toggleLight = () => {
    setLight(!light)
  }

  return (
    <Navigation.Wrapper size='md'>
      <Navigation.Item type='featured' href='/'>
        <Images.Avatar src='/images/avatar.webp' css={{ marginRight: '12px', height: '40px' }} />
        HoJeong Go
      </Navigation.Item>

      <Navigation.Right>
        <Navigation.Item as='div' css={{ fontSize: '1.2em', cursor: 'pointer' }} onClick={toggleLight}>
          <MdInvertColors />
        </Navigation.Item>
        <Navigation.Item href='/resume'>Resume</Navigation.Item>
        <Navigation.Item href='/stories'>Stories</Navigation.Item>
      </Navigation.Right>
    </Navigation.Wrapper>
  )
}

export default NavigationLayout
