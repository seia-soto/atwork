import type { NextPage } from 'next'
import Container from '../components/Container'
import * as Divider from '../components/Divider'
import * as Header from '../components/Header'
import Navigation from '../layouts/Navigation'

interface IPageProps {}

const Page: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <>
      <Header.Wrapper>
        <Navigation />
        <Header.Context layout='sub'>
          <Container size='md'>
            <h1>Resume</h1>
            <p>
              Activities are shown in latest order.
            </p>
            <Divider.Full location='left' />
          </Container>
        </Header.Context>
      </Header.Wrapper>
    </>
  )
}

export default Page
