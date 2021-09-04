import type { NextPage } from 'next'
import Container from '../components/Container'
import Navigation from '../layouts/Navigation'

interface PageProps {
}

const Page: NextPage<PageProps> = (props: PageProps) => {
  return (
    <>
      <Navigation />
      <Container size='md'>
        <h1>Resume</h1>
        <p>Activities are shown in latest order.</p>
      </Container>
    </>
  )
}

export default Page
