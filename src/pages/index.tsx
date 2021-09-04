import type { NextPage } from 'next'
import Navigation from './layouts/Navigation'

interface PageProps {
}

const Page: NextPage<PageProps> = (props: PageProps) => {
  return (
    <>
      <Navigation />
    </>
  )
}

export default Page
