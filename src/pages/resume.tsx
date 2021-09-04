import type { NextPage } from 'next'
import Container from '../components/Container'
import * as Divider from '../components/Divider'
import Navigation from '../layouts/Navigation'

interface IPageProps {}

const Page: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <>
      <Navigation />
      <Container size='md'>
        <h1>Resume</h1>
        <Divider.Featured />
        <p>Activities are shown in latest order.</p>
      </Container>
    </>
  )
}

export default Page
