import { styled } from '../styles/theme'
import { MdArrowForward } from 'react-icons/md'
import * as Button from '../components/Button'
import * as Profile from '../components/Profile'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '650px',
  maxHeight: '100vh',

  backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)'
})

const ProfileContext = () => {
  const theme = 'light'
  const styles = {
    dark: {
      color: 'rgba(255,255,255,.85)',

      '&:hover': {
        color: 'white'
      }
    },
    light: {
      color: 'rgba(0,0,0,.65)'
    }
  }

  return (
    <Container>
      <Profile.Wrapper>
        <Profile.Box theme={theme}>
          <div>
            <h2>HoJeong Go</h2>
            <p>Sophomore software engineer</p>
          </div>
          <div>
            <Button.Icon
              css={styles[theme]}
              icon={MdArrowForward}
              href='https://github.com/seia-soto'
            >GitHub @seia-soto</Button.Icon>
          </div>
        </Profile.Box>
      </Profile.Wrapper>
    </Container>
  )
}

export default ProfileContext
