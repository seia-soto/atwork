import type { NextPage } from 'next'
import { MdArrowForward, MdSchool, MdDomain, MdEmail, MdWeb } from 'react-icons/md'
import Container from '../components/Container'
import * as Button from '../components/Button'
import * as Divider from '../components/Divider'
import * as Effects from '../components/Effects'
import * as Timeline from '../components/Timeline'
import Navigation from '../layouts/Navigation'

const Link = (props: { [keys: string]: unknown }) => {
  return (
    <Effects.Featured target='_blank' css={{ margin: 0 }} {...props} />
  )
}
const Title = ({ children }: { children: string }) => {
  return (
    <h2>
      <Effects.Colored color='blue'>{children}</Effects.Colored>
    </h2>
  )
}

interface IPageProps {}

const Page: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <>
      <Navigation />

      <Container size='md'>
        <h1>
          Resume.
        </h1>
        <p>
          단순한 개발자가 아니라 모두와 편하게 말하며 솔루션을 제공할 수 있는 사람이 되고자 합니다.
        </p>
        <Button.Icon theme='black' icon={MdArrowForward} href='/curriculum-vitae'>CV로 세부사항 조회</Button.Icon>
      </Container>
      <Divider.Full />
      <Container size='md'>
        <Title>Education</Title>
        <p>현재 수원의 청명고등학교를 재학 중입니다.</p>

        <Timeline.Item icon={MdSchool}>
          <Link href='https://youngil-m.goesw.kr/index.do'>수원 영일중학교</Link> 졸업
        </Timeline.Item>
        <Timeline.Item icon={MdSchool}>
          <Link href='https://www.cm-h.hs.kr/'>수원 청명고등학교</Link> 재학 중
        </Timeline.Item>

        <Title>Contacts</Title>
        <p>모든 커뮤니케이션은 개인 의견이며 특정 단체를 대변하지 않습니다.</p>

        <Timeline.Item icon={MdEmail}>
          {'\'s\''} + {'\'eia@outlook\''} + {'\'.kr\''}
        </Timeline.Item>

        <Title>Status</Title>
        <p>현재 2개 이상의 서버를 관리하고 있으며 많은 단체에서 기술 지원 역할을 맡고 있습니다.</p>

        <Timeline.Item icon={MdDomain}>
          xstl: AlpineLinux 기반 홈 서버, 하위 VM 2개 실행 중
        </Timeline.Item>

        <Title>Projects</Title>
        <p>대표 프로젝트들로 더 많은 프로젝트는 GitHub에서 확인하실 수 있습니다.</p>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/atwork'>atwork</Link>: 현재 보고 계시는 웹 사이트로 TypeScript, Next.JS, 그리고 Stitches.JS로 만들어졌습니다.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Link>: Snowpack.JS에서 번들링없는 프론트엔드 MSA 아키텍쳐를 제안합니다.
          본래 zhoukekestar님의 작품이었으나 인계받았고 현재 관리 중입니다.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Link>: Clubhouse SNS 애플리케이션을 분석하여 공개한 비공식 API 클라이언트입니다.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Link>: Next.JS, Chakra-UI, MDX로 만든 웹 블로그입니다.
        </Timeline.Item>
      </Container>
    </>
  )
}

export default Page
