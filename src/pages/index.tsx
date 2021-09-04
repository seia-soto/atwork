import type { NextPage } from 'next'
import Container from './components/Container'
import * as Header from './components/Header'
import Navigation from './layouts/Navigation'

interface PageProps {
}

const Page: NextPage<PageProps> = (props: PageProps) => {
  return (
    <>
      <Navigation />
      <Header.Wrapper>
        <Header.Context>
          <Container size='xl'>
            <h1>Transition to TypeScript</h1>
            <p>See how I did while translating projects in JavaScript to TypeScript and what was the real problem.</p>
          </Container>
        </Header.Context>
      </Header.Wrapper>
    </>
  )
}

export default Page
