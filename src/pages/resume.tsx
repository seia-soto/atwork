import type { NextPage } from 'next'
import Head from 'next/head'
import { MdArrowForward, MdSchool, MdDomain, MdEmail, MdWeb } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import Container from '../components/Container'
import * as Button from '../components/Button'
import * as Divider from '../components/Divider'
import * as Images from '../components/Images'
import * as Timeline from '../components/Timeline'
import Navigation from '../layouts/Navigation'
import Profile from '../layouts/Profile'
import * as paragraph from '../styles/paragraph'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume. by HoJeong Go</title>
        <meta name='description' content='단순한 개발자가 아니라 모두와 편하게 말하며 솔루션을 제공할 수 있는 사람이 되고자 합니다.' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Resume',
                  item: 'https://seia.io/resume'
                }
              ]
            })
          }}
        />
      </Head>

      <Navigation />

      <Container size='md'>
        <h1>
          Resume.
        </h1>
        <p>
          단순한 개발자가 아니라 모두와 편하게 말하며 솔루션을 제공할 수 있는 사람이 되고자 합니다.
        </p>
        <Button.Icon icon={MdArrowForward} href='/curriculum-vitae'>CV로 세부사항 조회</Button.Icon>
      </Container>

      <Divider.Full />
      <Profile />
      <Divider.Full />

      <Container size='md'>
        <Timeline.Title>Education</Timeline.Title>
        <p>현재 수원의 청명고등학교를 재학 중입니다.</p>

        <Timeline.Item icon={MdSchool}>
          2017년 입학, <Timeline.Link href='https://youngil-m.goesw.kr/index.do'>수원 영일중학교</Timeline.Link> 졸업
        </Timeline.Item>
        <Timeline.Item icon={MdSchool}>
          2020년 입학, <Timeline.Link href='https://www.cm-h.hs.kr/'>수원 청명고등학교</Timeline.Link> 재학 중
        </Timeline.Item>

        <Timeline.Title>Contacts</Timeline.Title>
        <p>모든 커뮤니케이션은 개인 의견이며 특정 단체를 대변하지 않습니다.</p>

        <Timeline.Item icon={MdEmail}>
          seia@outlook.kr
        </Timeline.Item>
        <Timeline.Item icon={FaGithub}>
          <a href='https://github.com/seia-soto'>seia-soto</a>
        </Timeline.Item>

        <Timeline.Title>Status</Timeline.Title>
        <p>현재 2개 이상의 서버를 관리하고 있으며 많은 단체에서 기술 지원 역할을 맡고 있습니다.</p>

        <Timeline.Item icon={MdDomain}>
          xstl: AlpineLinux 기반 홈 서버, 하위 VM 2개 실행 중
        </Timeline.Item>

        <Timeline.Title>Featured</Timeline.Title>
        <p>대표 프로젝트들로 더 많은 프로젝트는 GitHub에서 확인하실 수 있습니다.</p>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Timeline.Link>: Snowpack.JS에서 번들링없는 프론트엔드 MSA 아키텍쳐를 제안합니다.
          본래 zhoukekestar님의 작품이었으나 인계받았고 현재 관리 중입니다.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Timeline.Link>: Clubhouse SNS 애플리케이션을 분석하여 공개한 비공식 API 클라이언트입니다.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Timeline.Link>: Next.JS, Chakra-UI, MDX로 만든 웹 블로그입니다.
        </Timeline.Item>
      </Container>
      <Divider.Full css={{ marginTop: '24px' }} />

      <Container size='md'>
        <h1>
          <Timeline.Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Timeline.Link>
        </h1>
        <p>
          저는 다음 세대의 프론트엔드를 위해서 언제나 생각하고 구현하고 있습니다. 그 결과 프론트엔드 구조에 번들링없는 MSA 구조를 그룹에 적용할 수 있도록 하였습니다.
        </p>
        <Images.Featured alt='GitHub screenshot of snowpack-plugin-import-map' src='/images/projects/snowpack-plugin-import-map-presentation-1.webp' />

        <div className={paragraph.featured({ level: 'lg', pad: 'featured' })}>
          <h2>
            프론트엔드 그리고<br />
            마이크로서비스 아키텍쳐
          </h2>
          <h3>
            저는 zhoukekestar님의 단순한 생각을<br />
            모든 조직에 적용시킬 수 있도록 바꾸었습니다.
          </h3>
          <p>
            최신 프론트엔드 애플리케이션들은 React라는 라이브러리를 공통적으로 사용합니다.<br />
            그리고 대다수의 큰 웹 앱들은 그에 걸맞는 CDN과 함께 제공됩니다.<br />
            그런데 이 때 모든 앱들이 공통된 CDN을 사용하면 어떻게 될까요?<br />
            <br />
            라이브러리 코드를 한 번 밖에 다운로드할 필요가 없으므로 모든 앱의 로드 속도는 더 빨라질 것입니다.<br />
            더 많은 앱에 적용할 수록 더 빨라집니다.<br />
            <br />
            CDN의 URL 포맷을 결정할 수 있도록 하고 라이브러리에 TypeScript 지원을 추가했습니다.<br />
            그리고 현재는 제가 라이브러리를 관리하고 있습니다.
          </p>
          <Button.Icon icon={MdArrowForward} href='https://www.npmjs.com/package/snowpack-plugin-import-map'>NPM에서 보기</Button.Icon>
        </div>
      </Container>
      <Divider.Full />

      <Container size='md'>
        <h1>
          <Timeline.Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Timeline.Link>
        </h1>
        <p>
          저는 웹 애플리케이션의 구조를 이해하고 이를 통해 기존에 있는 애플리케이션을 더욱 기능이 풍부하게 만들고 구조적으로 개선을 시킬 수 있습니다.
          clubhouse-api는 Clubhouse SNS 애플리케이션을 분석해 API를 간단히 사용할 수 있도록한 Wrapper 라이브러리입니다.
        </p>
        <Images.Featured alt='GitHub screenshot of snowpack-plugin-import-map' src='/images/projects/clubhouse-preview.webp' />

        <div className={paragraph.featured({ level: 'lg', pad: 'featured' })}>
          <h2>
            애플리케이션에 가장 적합한<br />
            전반적인 모델 탐구
          </h2>
          <h3>
            애플리케이션의 동작 원리를 파악하는 것은<br />
            그 구조를 다시 개선하여 적용할 수 있다는 것을<br />
            의미합니다.
          </h3>
          <p>
            대부분의 웹 애플리케이션은 굉장히 추상화가 잘 되어 있어 어떤 언어를 사용하더라도 접근성이 좋습니다.<br />
            하지만 이것은 반대로 해커들이 저의 웹 애플리케이션을 훨씬 더 잘 이해할 수 있다는 말이기도 합니다.<br />
            <br />
            작동 원리 파악을 통하여 더 많은 관점을 가지고 애플리케이션을 향상시킬 수 있습니다.<br />
            그리고 보안에 대해서 전문가 분들이 분명히 있지만 개발자로서 소통에 편의를 가질 수도 있습니다.<br />
            <br />
            현재 프로젝트는 Clubhouse의 프라이버시 이슈가 계속됨에 따라 중단되었으며 더 업데이트되지 않습니다.
          </p>
          <Button.Icon icon={MdArrowForward} href='https://github.com/seia-soto/clubhouse-api'>GitHub에서 보기</Button.Icon>
        </div>
      </Container>
      <Divider.Full />

      <Container size='md'>
        <h1>
          <Timeline.Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Timeline.Link>
        </h1>
        <p>
          Typed.sh는 제가 운영하고 있는 팀 블로그입니다.<br />
          현재는 Ghost-CMS를 사용하고 있으나 이전에 마크다운 블로그로 운영되었습니다.
        </p>
        <Images.Featured alt='GitHub screenshot of snowpack-plugin-import-map' src='/images/projects/typedsh-preview.webp' />

        <div className={paragraph.featured({ level: 'lg', pad: 'featured' })}>
          <h2>
            SSG 그리고 SSR<br />
            원하는 것만 골라가세요
          </h2>
          <h3>
            Next.JS를 어떤 방식으로 써도 좋습니다.<br />
            하지만 블로그에서는 최대한의 가용성을 위해<br />
            서버의 유무가 서비스에 영향을 주지 않도록 했습니다.
          </h3>
          <p>
            Typed.sh 마크다운 블로그를 개발할 당시에는 정적 타깃만을 목표로 삼았었습니다.<br />
            이전의 데이터 손실, 같은 실수를 막기 위해서 서버의 유무와는 무관하게 서버가 꺼져도 돌아가는 서비스를 원했습니다.<br />
            그 결과로 SSR 그리고 SSG에서 모두 똑같은 화면을 보여주는 것으로 완료했습니다.<br />
            <br />
            이 경험 자체가 기술적으로 진보했다거나 의미가 크게 없더라도 스스로에게 목표를 달성했다는 점에서 그리고 서비스를 더욱 안전하게 했다는 점에서 의미를 가진다 생각합니다.
          </p>
          <Button.Icon icon={MdArrowForward} href='https://github.com/typed-sh/blog'>GitHub에서 보기</Button.Icon>
        </div>
      </Container>
      <Divider.Full />

      <Container size='md'>
        <h2>
          여기까지 읽어주셔서 정말 감사합니다.<br />
          여기에서부터는 기술 외 활동을 전시합니다.
        </h2>
        <p>
          언제나 많은 사람들이 저에게 조언하곤 합니다.<br />
          항상 제가 바뀌지 않는 것은 조언들의 문제가 아니라 그것을 실천하지 않기 때문이라고 생각합니다.<br />
          <br />
          언제나 바뀌어가는 모습 보실 수 있도록 스스로를 가꾸겠습니다.
        </p>
      </Container>
    </>
  )
}

export default Page
