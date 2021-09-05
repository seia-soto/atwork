import type { NextPage } from 'next'
import { MdArrowForward, MdSchool, MdDomain, MdEmail } from 'react-icons/md'
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
        <h2>
          <Effects.Colored color='blue'>Education</Effects.Colored>
        </h2>
        <p>현재 수원의 청명고등학교를 재학 중입니다.</p>

        <Timeline.Item icon={MdSchool}>
          <Link href='https://youngil-m.goesw.kr/index.do'>수원 영일중학교</Link> 졸업
        </Timeline.Item>
        <Timeline.Item icon={MdSchool}>
          <Link href='https://www.cm-h.hs.kr/'>수원 청명고등학교</Link> 재학 중
        </Timeline.Item>

        <h2>
          <Effects.Colored color='blue'>Contacts</Effects.Colored>
        </h2>
        <p>모든 커뮤니케이션은 개인 의견이며 특정 단체를 대변하지 않습니다.</p>

        <Timeline.Item icon={MdEmail}>
          {'\'s\''} + {'\'eia@outlook\''} + {'\'.kr\''}
        </Timeline.Item>

        <h2>
          <Effects.Colored color='blue'>Status</Effects.Colored>
        </h2>
        <p>현재 2개 이상의 서버를 관리하고 있으며 많은 단체에서 기술 지원 역할을 맡고 있습니다.</p>

        <Timeline.Item icon={MdDomain}>
          xstl: AlpineLinux 기반 홈 서버, 하위 VM 2개 실행 중
        </Timeline.Item>
      </Container>
    </>
  )
}

export default Page
