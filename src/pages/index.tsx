import type { NextPage } from 'next'
import Container from './components/Container'
import * as Header from './components/Header'
import Navigation from './layouts/Navigation'

interface PageProps {
}

const Page: NextPage<PageProps> = (props: PageProps) => {
  return (
    <>
      <Header.Wrapper>
        <Navigation />
        <Header.Context>
          <Container size='lg'>
            <h1>Title</h1>
            <p>Excerpt</p>
          </Container>
        </Header.Context>
      </Header.Wrapper>
    </>
  )
}

export default Page
