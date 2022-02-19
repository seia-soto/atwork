import type { FC } from 'react'
import type { NextPage } from 'next'
import type { IconType } from 'react-icons'
import Head from 'next/head'
import {
  MdArrowForward,
  MdAutoFixHigh,
  MdLightbulbOutline,
  MdTextsms,
  MdViewInAr,
  MdWbCloudy
} from 'react-icons/md'
import Container from '../components/Container'
import * as Divider from '../components/Divider'
import * as Card from '../components/Card'
import * as Button from '../components/Button'
import Navigation from '../layouts/Navigation'

const CardIconCaster: FC<{
  icon: IconType
}> = ({ icon: Icon }) => <Icon style={{ fontSize: '2.25em' }} />

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oursourcing. by HoJeong Go</title>
        <meta name='description' content='계획을 실행에 옮겨보세요. 유연하게 계획한 여러분의 사안을 유연하게 실행될 수 있도록 돕습니다.' />

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
                  name: 'Oursourcing',
                  item: 'https://seia.io/outsourcing'
                }
              ]
            })
          }}
        />
      </Head>

      <Navigation />

      <Container size='md'>
        <h1>
          Outsourcing.
        </h1>
        <p>
          계획을 실행에 옮겨보세요.
          유연하게 계획한 여러분의 사안을 유연하게 실행될 수 있도록 돕습니다.
        </p>
      </Container>

      <Divider.Full />

      <Container size='md'>
        <h2>Contact</h2>
        <p>
          이메일을 통해서 조율이 가능합니다.
          전송하실 때 다음 사항들을 포함해주시면 제가 더욱 빠르게 내용 확인이 가능합니다.

          <ul>
            <li>
              제목
              <ol>
                <li>발주 요청에 대한 사실 확인 문구</li>
                <li>발주 유형: 웹, 프론트엔드, 백엔드, ...</li>
              </ol>
            </li>
            <li>
              내용
              <ol>
                <li>회신받으실 발주 요청자 혹은 발주처 담당자 성함과 연락처</li>
                <li>발주하시는 목적</li>
                <li>시작과 마감 시기를 포함한 희망 진행 일정</li>
                <li>비용과 희망하시는 세금 및 비용 지불 방법</li>
                <li>요구되는 기술적 사양이나 구현 상세 사항: 기획서, 사양 설명서, ...</li>
              </ol>
            </li>
          </ul>
        </p>

        <Button.Icon
          icon={MdArrowForward}
          href='mailto:seia@outlook.kr'
        >
          seia@outlook.kr
        </Button.Icon>

        <p>
          기술 질문을 포함하여 단순 질문의 경우에는 어떠한 비용도 부담되지 않습니다.<br />
          진행 과정에서 기밀 유지나 보안 절차가 필요한 경우에는 반드시 확인하기 쉽게 명시해주시기 바랍니다.
        </p>
      </Container>
      <Divider.Full />

      <Container size='md'>
        <h2>Services</h2>
        <p>
          현재 솔루션 혹은 애플리케이션 개발 및 배포는 JavaScript와 Node.JS에 한하여 서비스가 제공됩니다.
          또 난이도나 위험 부담 등의 경우에 따라 추가 비용이 발생할 수 있음을 알려드립니다.
        </p>

        <Card.Group>
          <Card.Item>
            <CardIconCaster icon={MdViewInAr} />
            <h3>
              웹: 백엔드
            </h3>

            <p>
              Fastify를 사용하여 프로젝트 완료 이후로도 확장성있고 TDD에 효율적인 백엔드 아키텍쳐를 설계하고 개발합니다.
            </p>
          </Card.Item>
          <Card.Item>
            <CardIconCaster icon={MdLightbulbOutline} />
            <h3>
              웹: 프론트엔드
            </h3>

            <p>
              React와 TypeScript를 사용하여 여러분의 프로젝트에 들어맞는 웹 사이트를 개발합니다.
            </p>
          </Card.Item>
          <Card.Item>
            <CardIconCaster icon={MdAutoFixHigh} />
            <h3>
              웹 및 앱: API 샘플링
            </h3>

            <p>
              MITM을 사용하여 웹을 기반으로 동작하는 애플리케이션을 분석하고 필요한 API를 찾아 클라이언트를 만듭니다.
              애플리케이션은 iOS만 가능합니다.
            </p>
          </Card.Item>
          <Card.Item>
            <CardIconCaster icon={MdTextsms} />
            <h3>
              SNS: 챗봇
            </h3>

            <p>
              공식적으로 제공되는 소셜 서비스에서 동작하는 챗봇을 제작합니다.
            </p>
          </Card.Item>
          <Card.Item>
            <CardIconCaster icon={MdWbCloudy} />
            <h3>
              인프라: 배포
            </h3>

            <p>
              최대한 가벼운 Linux 환경에서 격리된 상태에서 기본적인 보안을 유지하며 애플리케이션을 실행할 수 있는 환경을 만듭니다.
            </p>
          </Card.Item>
        </Card.Group>
      </Container>

      <Container size='md'>
        <h2>세금</h2>
        <Divider.Full />

        <h3>발주처 주체의 세금 처리</h3>
        <p>
          모든 거래는 2021년 기준으로 미성년자 신분이기 때문에 개인 거래로 취급됩니다.
          세금은 발주처에서 3.3% 원천징수를 통하여 부과하는 것이 가장 간단하게 해결할 수 있는 방법이며 권장드리고 있습니다.
          제반 비용으로 볼 수 있는 혹은 발주 작업 중 발생한 모든 세금은 전체 금액에서 차감하는 것이 아니라 따로 발주처에서 부담하는 것을 원칙으로 합니다.
        </p>

        <h3>프리랜서 주체의 세금 처리</h3>
        <p>
          프리랜서 주체로 매년 5월 세금 처리로 취급을 하게 될 경우에는 발생하는 모든 비용을 선지불하셔야 합니다.
          이는 문서 상으로 발주 사실을 명확히 하게 위한 장치입니다.
        </p>
      </Container>

      <Container size='md'>
        <h2>비용</h2>
        <Divider.Full />

        <h3>제반 비용 계산</h3>
        <p>
          비용의 계산은 프로젝트 유형별로 달라질 수 있습니다.
          기본적으로 기능의 규모와 양과 유지보수 기간 등을 토대로 정해지며 특히 시간이 촉박하여 마감 기한이 짧으면 짧을수록 업무 강도가 증가하므로 비용은 증가합니다.
          또 외주를 하는 동안 발주처의 요구로 인해 발생하는 모든 추가 제반 비용은 비용에 포함합니다.
          기존 소프트웨어의 유지보수 혹은 문제 해결을 하는 경우에는 문제의 규모나 난이도에 따라 다른 비용이 할당되게 됩니다.
        </p>

        <h3>대금 지불</h3>
        <p>
          대금은 프로젝트 착수 결정 이후 착수금의 30%를 선지불하여 시작됩니다.
          그리고 남은 기간에 따라 매주 혹은 매월 일정 비율로 나누어서 지불합니다.
          발주처에서 먼저 지불 방식을 제안해주셔도 됩니다만 프로젝트 소스코드를 전달해야 하는 등 결과물이 전송되어야 하는 경우에는 최소 50%의 비용을 선지불하셔야 합니다.
        </p>

        <h3>오프라인 회의</h3>
        <p>
          오프라인 회의를 하는데에 필요한 장소 대여비 등은 발주처에서 부담합니다.
        </p>

        <h3>중도 포기 시 환불</h3>
        <p>
          중도에 진행을 포기할 시에는 초기 착수금을 포함하여 대금을 진행 상황에 따라 최대 70%까지 환불하고 진행한 작업물을 모두 이전해드립니다.
          착수일에서 일주일 안 혹은 진행한 질이나 양이 의미없다 판단되는 경우에는 전액 환불해드립니다.
        </p>

        <h3>추가 작업에 대한 정산</h3>
        <p>
          작업 진행 중 초기 요청 사항 외에 추가로 산정된 요청 사항이 있는 경우 비용을 재산정해야 합니다.
          요청 사항 정리에 대한 모든 최종 책임은 발주처에 있으며 남은 기간 내에 구현하기가 어렵다고 판단될 경우 혹은 기간을 초과하여 산정하는 경우에는 시간 당 비용이 추가로 청구됩니다.
        </p>
      </Container>

      <Container size='md'>
        <h2>기밀 유지</h2>
        <Divider.Full />

        <h3>소스코드 기밀 유지</h3>
        <p>
          프로젝트의 완전한 기밀 유지가 필요하신 경우에는 미리 말씀해주세요.
          모든 소스코드를 종단간 암호화(E2EE) 기술로 보호되는 Keybase로 관리가 진행되며 인증된 기기에서만 작업이 가능하도록 제한할 수 있습니다.
          혹은 사설 서버를 사용하여 모든 소스코드를 외부 플랫폼에 반출하지 않으면서 작업 또한 가능합니다.
          이 경우에는 추가 비용이 발생할 수 있습니다.
        </p>

        <h3>발주 사실 기밀 유지</h3>
        <p>
          발주 사실 자체에 대한 기밀 유지가 필요하신 경우에는 미리 말씀해주세요.
          모든 소스코드를 기밀 유지 목적으로 사설 혹은 종단간 암호화 플랫폼에서 인증된 기기에서만 접근이 가능하도록 제한하고
          발주 여부를 포함하여 발주에 관련된 발주 사실 자체에 대해 그 어떠한 사실도 외부에 언급되지 않습니다.
          또 프로젝트 진행 중 커뮤니케이션에 대해서 발주처의 모든 정보는 블라인드된 상태로 진행하여 사실 자체에 대한 유출 여지를 최소화합니다.
        </p>

        <h3>그 외</h3>
        <p>
          필요에 따라 가능한 최대한의 보안을 유지할 수 있도록 보안 관련 사항은 언제나 미리 말씀해주세요.
        </p>
      </Container>

      <Container size='md'>
        <h2>진행</h2>
        <Divider.Full />

        <h3>정기 및 비정기 회의</h3>
        <p>
          회의하는데에 필요한 장소와 관련된 것은 발주처에서 부담합니다.
          본인은 미성년자이므로 시간과 장소 등에 제약이 있을 수 있습니다.
          이 점 미리 유의해주세요.
        </p>
      </Container>
      <Divider.Full />
    </>
  )
}

export default Page
