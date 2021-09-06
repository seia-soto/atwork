import type { NextPage } from 'next'
import Head from 'next/head'
import { MdArrowForward } from 'react-icons/md'
import Container from '../components/Container'
import * as Button from '../components/Button'
import * as Divider from '../components/Divider'
import * as Effects from '../components/Effects'
import * as Header from '../components/Header'
import Navigation from '../layouts/Navigation'
import * as paragraph from '../styles/paragraph'

interface IPageProps {}

const Page: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <>
      <Head>
        <title>HoJeong Go: Sophomore in general problem solving</title>
      </Head>
      <Header.Wrapper layout='featured'>
        <Navigation />
        <Header.Context size='lg'>
          <div>
            <h2>
              작지만 빠르고 준비된<br />
              가능성 있는 작품을,<br />
            </h2>
            <h1>
              <Effects.Featured href='https://github.com/typed-sh/blog'>설계</Effects.Featured>하고<br />
              <Effects.Featured href='https://github.com/seia-soto/clubhouse-api'>분석</Effects.Featured>했습니다<br />
              <br />
              그리고 <Effects.Colored color='blue'>만들어나가는 중</Effects.Colored>입니다.
            </h1>
          </div>
        </Header.Context>
      </Header.Wrapper>
      <Divider.Full />

      <Container size='md'>
        <div className={paragraph.featured()}>
          <h1>
            HTML로 시작,<br />
            TypeScript로 진행 중
          </h1>
          <h3>
            제 첫 언어는 HTML입니다.<br />
            2016년 Atom Editor와 함께 시작했습니다.<br />
            계속해서 여러 커뮤니티의 도움을 받아 성장했고<br />
            그리고 지금 스스로 검색하여 서비스를 만들고 있습니다.
          </h3>
        </div>
        <Button.Icon theme='black' icon={MdArrowForward} href='https://github.com/seia-soto'>GitHub에서 활동 보기</Button.Icon>

        <div className={paragraph.featured({ align: 'right' })}>
          <h1>
            모든 업무에서,<br />
            부담없이
          </h1>
          <h3>
            저는 개발 외에도 경제와 마케팅까지<br />
            많은 영역을 공부하고 있습니다.<br />
            이를 통해서 개발자라는 직업군에 있는 딜레마를 극복하고<br />
            더 많은 사람들과 성공적으로 문제를 해결하길 원합니다.
          </h3>
        </div>
      </Container>
    </>
  )
}

export default Page
