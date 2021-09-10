import type { NextPage } from 'next'
import Head from 'next/head'
import {
  MdArrowBack,
  MdSchool,
  MdDomain,
  MdEmail,
  MdWeb,
  MdPerson,
  MdToday,
  MdSettingsEthernet,
  MdLanguage,
  MdPresentToAll
} from 'react-icons/md'
import Container from '../components/Container'
import * as Button from '../components/Button'
import * as Divider from '../components/Divider'
import Navigation from '../layouts/Navigation'
import * as Timeline from '../components/Timeline'

interface IPageProps {}

const Page: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <>
      <Head>
        <title>Curriculum Vitae. by HoJeong Go</title>
        <meta name='description' content='A sophomore software engineer.' />

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
                  name: 'Curriculum Vitae',
                  item: 'https://seia.io/curriculum-vitae'
                }
              ]
            })
          }}
        />
      </Head>

      <Navigation />

      <Container size='md'>
        <h1>
          Curriculum Vitae.
        </h1>
        <p>
          A sophomore software engineer.
        </p>
        <Button.Icon icon={MdArrowBack} href='/resume' left>Back to resume</Button.Icon>
      </Container>
      <Divider.Full />

      <Container size='md'>
        <Timeline.Title>About me</Timeline.Title>
        <p>
          I am a sophomore in various areas, not only in high school (following the Korean age schema).
          I am learning marketing, consulting, and economics for general purposes as I want to experience as many things as possible.
          The one of most I researched is software development.
          And it is the best way for me to create something valuable and bring my hopes into the real world.
          Talking with many people is also one of my life missions as a kind of experience.
          I hope to meet you in a nice place someday.
          I will prepare for you not to think up a common misunderstanding of software developer meme while communicating with me.
        </p>

        <Timeline.Item icon={MdPerson}>
          Name: HoJeong Go (he/him)
        </Timeline.Item>
        <Timeline.Item icon={MdToday}>
          Birth: 29 July 2004
        </Timeline.Item>
        <Timeline.Item icon={MdSettingsEthernet}>
          MBTI: INTP ~ INFP
        </Timeline.Item>

        <Timeline.Title>Education</Timeline.Title>
        <p>I am attending Cheongmyeong high school.</p>

        <Timeline.Item icon={MdSchool}>
          Entered 2017, Graduated <Timeline.Link href='https://youngil-m.goesw.kr/index.do'>Yeongil middle school, Suwon</Timeline.Link>
        </Timeline.Item>
        <Timeline.Item icon={MdSchool}>
          Entered 2020, Attending <Timeline.Link href='https://www.cm-h.hs.kr/'>Cheongmyeong high school, Suwon</Timeline.Link>
        </Timeline.Item>

        <Timeline.Title>Contacts</Timeline.Title>
        <p>Every communication is personal and does not represent any organization.</p>

        <Timeline.Item icon={MdEmail}>
          seia@outlook.kr
        </Timeline.Item>

        <Timeline.Title>Status</Timeline.Title>
        <p>I am handling 2 and more servers and assisting many organizations technically in many unofficial ways.</p>

        <Timeline.Item icon={MdDomain}>
          xstl: AlpineLinux base home server, running 2 virtual machines
        </Timeline.Item>

        <Timeline.Title>Featured</Timeline.Title>
        <p>This is featured projects, you can check out more on my GitHub.</p>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/atwork'>atwork</Timeline.Link>: The website you currently seeing, made with TypeScript, Next.JS, and Stitches.JS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Timeline.Link>: Offering unbundled frontend MSA environment via Snowpack plugin.
          Originally the work of zhoukekestar but currently I am managing it.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Timeline.Link>: The unofficial Clubhouse SNS client by analyzing the application.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Timeline.Link>: The blog made with Next.JS, Chakra-UI, and MDX.
        </Timeline.Item>
      </Container>
      <Divider.Full css={{ marginTop: '24px' }} />

      <Container size='md'>
        <h2>Frontend</h2>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/atwork'>atwork</Timeline.Link>: The website you currently seeing, made with TypeScript, Next.JS, and Stitches.JS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Timeline.Link>: Offering unbundled frontend MSA environment via Snowpack plugin.
          Originally the work of zhoukekestar but currently I am managing it.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Timeline.Link>: The blog made with Next.JS, Chakra-UI, and MDX.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/ohys-fe'>ohys-fe</Timeline.Link>: A simple frontend for Ohys-Raws.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/202012-last-hackathon-ttys0'>202012-last-hackathon-ttys0</Timeline.Link>: A simple hackathon website held in 2020 using React and Chakra-UI.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/discord-watchtower-front'>discord-watchtower-front</Timeline.Link>: The frontend of Discord watchtower using React and Chakra-UI.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/swab85-mbti-test'>swab85-mbti-test</Timeline.Link>: The MBTI testing website applied concept from SWAB85, Twitch streamer.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/ohys-fanmade'>ohys-fanmade</Timeline.Link>: The old version of Ohys-FE.
        </Timeline.Item>

        <h2>Backend</h2>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/lightwsd-fastify'>lightwsd-fastify</Timeline.Link>: A simple socket-io alternative for Fastify.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/lightwsd'>lightwsd</Timeline.Link>: A simple socket-io replacement for parallel websocket session management.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/parcel-routes'>parcel-routes</Timeline.Link>: A simple router extension for Koa web server.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/discord-watchtower'>discord-watchtower</Timeline.Link>: The Discord ping checker for alternative use of status.discordapp.com.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/maskd-releases'>maskd-releases</Timeline.Link>: The docs of maskd service provides mask status of institutes.
        </Timeline.Item>

        <h2>Utility and scrapping</h2>
        <p>
          General purpose automation and utilities including scrappers.
        </p>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/simnalamburt/awscliv2.appimage'>simnalamburt/awscliv2.appimage</Timeline.Link>: The unofficial AWS CLI v2, in a single file.
          I did automation of building via GitHub CI.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/airi-sato'>airi-sato</Timeline.Link>: A multi-purpose Discord bot.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/neatified'>neatified</Timeline.Link>: The Chrome extension to prevent right-click and copy blocking.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/Serium'>Serium</Timeline.Link>: A multi-purpose Discord bot, prior version of airi-sato.
        </Timeline.Item>

        <h2>Infrastructure</h2>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/saebasol-the-server'>saebasol-the-server</Timeline.Link>: The shell script to setup saebasol server.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/containers'>containers</Timeline.Link>: The home server setup with docker compose stack and AlpineLinux.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/nginx-conf'>nginx-conf</Timeline.Link>: The Nginx configuration snippets.
        </Timeline.Item>

        <h2>Reverse engineering</h2>
        <p>
          Everything is educational purpose and I close project if there is security concern.
          Permanently deleted means there is no source code anywhere and no way to recover it.
        </p>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/medium-limit-bypass'>medium-limit-bypass</Timeline.Link>: The Chrome extension to bypass Medium.com free reading limit.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Timeline.Link>: (archived) The unofficial client of Clubhouse. Literally, unofficial using iOS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/korail-api'>korail-api</Timeline.Link>: The unofficial client of Korail. Literally, unofficial using iOS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          kakaoscript: (permanently deleted) The unofficial client of KakaoTalk. Literally, unofficial using iOS and macOS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          tossbreak: (permanently deleted) The private jailbreak detection bypass of Toss. Literally, unofficial and dangerous using iOS.
        </Timeline.Item>

        <h2>Translations</h2>
        <p>
          Translations are not fully done by me everytime.
        </p>

        <Timeline.Item icon={MdLanguage}>
          <Timeline.Link href='https://github.com/seia-soto/VeraCrypt'>VeraCrypt</Timeline.Link>: Translated the part of VeraCrypt project.
        </Timeline.Item>
        <Timeline.Item icon={MdLanguage}>
          <Timeline.Link href='https://github.com/seia-soto/CPUTool-Translations'>CPUTool-Translations</Timeline.Link>: Translated the CPU Tool project, iOS tweak to control throughput of Apple mobile CPUs.
        </Timeline.Item>
        <Timeline.Item icon={MdLanguage}>
          <Timeline.Link href='https://github.com/seia-soto/shadowsocks-windows'>shadowsocks-windows</Timeline.Link>: Provided initial Korean translation of shadowsocks-windows project.
        </Timeline.Item>

        <h2>Presentation</h2>

        <Timeline.Item icon={MdPresentToAll}>
          <Timeline.Link href='https://github.com/seia-soto/presentation-unbundled-code-splitting-strategy'>Unbundled code splitting strategy</Timeline.Link>: Explains how micro frontend works.
        </Timeline.Item>

        <h2>ETC</h2>
        <p>
          Not categorized or not featured in general.
        </p>

        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/cm-h-sasm'>cm-h-sasm</Timeline.Link>: The simple scripting language made with C99 for school task.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Timeline.Link href='https://github.com/seia-soto/auberant'>auberant</Timeline.Link>: My first Node.JS project, Discord bot.
        </Timeline.Item>
      </Container>
      <Divider.Full css={{ marginTop: '24px' }} />
    </>
  )
}

export default Page
