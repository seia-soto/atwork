import type { NextPage } from 'next'
import { MdArrowForward } from 'react-icons/md'
import Container from '../components/Container'
import * as Button from '../components/Button'
import * as Divider from '../components/Divider'
import Navigation from '../layouts/Navigation'

interface IPageProps {}

const Page: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <>
      <Navigation />

      <Container size='md'>
        <h1>
          Stories.
        </h1>
        <p>
          그동안 많은 솔루션을 만들면서 많은 일을 겪었습니다.<br />
          당시에 제가 어떤 고민을 했는지 들어보세요.
        </p>
        <Button.Icon theme='black' icon={MdArrowForward} href='/resume'>Resume으로 한 눈에 보기</Button.Icon>
      </Container>
      <Divider.Full />
    </>
  )
}

export default Page
