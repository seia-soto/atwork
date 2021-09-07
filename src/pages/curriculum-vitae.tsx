import type { NextPage } from 'next'
import Head from 'next/head'
import {
  MdArrowForward,
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
import * as Effects from '../components/Effects'
import Navigation from '../layouts/Navigation'
import * as Timeline from '../components/Timeline'

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
      <Head>
        <title>Curriculum Vitae. by HoJeong Go</title>
      </Head>

      <Navigation />

      <Container size='md'>
        <h1>
          Curriculum Vitae.
        </h1>
        <p>
          A sophomore software engineer.
        </p>
        <Button.Icon icon={MdArrowForward} href='/resume'>Back to resume</Button.Icon>
      </Container>
      <Divider.Full />

      <Container size='md'>
        <Title>About me</Title>
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

        <Title>Education</Title>
        <p>I am attending Cheongmyeong high school.</p>

        <Timeline.Item icon={MdSchool}>
          Entered 2017, Graduated <Link href='https://youngil-m.goesw.kr/index.do'>Yeongil middle school, Suwon</Link>
        </Timeline.Item>
        <Timeline.Item icon={MdSchool}>
          Entered 2020, Attending <Link href='https://www.cm-h.hs.kr/'>Cheongmyeong high school, Suwon</Link>
        </Timeline.Item>

        <Title>Contacts</Title>
        <p>Every communication is personal and does not represent any organization.</p>

        <Timeline.Item icon={MdEmail}>
          {'\'s\''} + {'\'eia@outlook\''} + {'\'.kr\''}
        </Timeline.Item>

        <Title>Status</Title>
        <p>I am handling 2 and more servers and assisting many organizations technically in many unofficial ways.</p>

        <Timeline.Item icon={MdDomain}>
          xstl: AlpineLinux base home server, running 2 virtual machines
        </Timeline.Item>

        <Title>Featured</Title>
        <p>This is featured projects, you can check out more on my GitHub.</p>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/atwork'>atwork</Link>: The website you currently seeing, made with TypeScript, Next.JS, and Stitches.JS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Link>: Offering unbundled frontend MSA environment via Snowpack plugin.
          Originally the work of zhoukekestar but currently I am managing it.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Link>: The unofficial Clubhouse SNS client by analyzing the application.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Link>: The blog made with Next.JS, Chakra-UI, and MDX.
        </Timeline.Item>
      </Container>
      <Divider.Full css={{ marginTop: '24px' }} />

      <Container size='md'>
        <h2>Frontend</h2>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/atwork'>atwork</Link>: The website you currently seeing, made with TypeScript, Next.JS, and Stitches.JS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/snowpack-plugin-import-map'>snowpack-plugin-import-map</Link>: Offering unbundled frontend MSA environment via Snowpack plugin.
          Originally the work of zhoukekestar but currently I am managing it.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/typed-sh/blog'>typed-sh/blog</Link>: The blog made with Next.JS, Chakra-UI, and MDX.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/ohys-fe'>ohys-fe</Link>: A simple frontend for Ohys-Raws.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/202012-last-hackathon-ttys0'>202012-last-hackathon-ttys0</Link>: A simple hackathon website held in 2020 using React and Chakra-UI.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/discord-watchtower-front'>discord-watchtower-front</Link>: The frontend of Discord watchtower using React and Chakra-UI.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/swab85-mbti-test'>swab85-mbti-test</Link>: The MBTI testing website applied concept from SWAB85, Twitch streamer.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/ohys-fanmade'>ohys-fanmade</Link>: The old version of Ohys-FE.
        </Timeline.Item>

        <h2>Backend</h2>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/lightwsd-fastify'>lightwsd-fastify</Link>: A simple socket-io alternative for Fastify.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/lightwsd'>lightwsd</Link>: A simple socket-io replacement for parallel websocket session management.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/parcel-routes'>parcel-routes</Link>: A simple router extension for Koa web server.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/discord-watchtower'>discord-watchtower</Link>: The Discord ping checker for alternative use of status.discordapp.com.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/maskd-releases'>maskd-releases</Link>: The docs of maskd service provides mask status of institutes.
        </Timeline.Item>

        <h2>Utility and scrapping</h2>
        <p>
          General purpose automation and utilities including scrappers.
        </p>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/ohys-api'>ohys-api</Link>: The Ohys-Raws file name and schedule parser.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/twitchd'>twitchd</Link>: The unofficial Twitch API client.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/twverd'>twverd</Link>: The web proxy using Vercel to stream Twitch broadcasts seamlessly over poor network status.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/boj-userspace-login'>boj-userspace-login</Link>: A simple library to login Beakjoon Online Judge via web driver.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/boj-provider'>boj-provider</Link>: A simple library to communicate with Beakjoon Online Judge.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/naverDict'>naverDict</Link>: The library to use Naver dictionary API easily using Cheerio.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/simnalamburt/awscliv2.appimage'>simnalamburt/awscliv2.appimage</Link>: The unofficial AWS CLI v2, in a single file.
          I did automation of building via GitHub CI.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/windows-ltsc-releases'>windows-ltsc-releases</Link>: A simple utility to grab Windows LTSC ISO download link from Microsoft website without sending information.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/typed-sh-202101-data-recovery'>typed-sh-202101-data-recovery</Link>: A simple utility to recover lost Typed.sh content from web archive.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/invisibleHandshake'>invisibleHandshake</Link>: A dead-simple utility to change MTU value of Windows network adapter.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/GreenTunnel'>GreenTunnel</Link>: A refactored version of GreenTunnel proxy.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/chrome-discord-presence'>chrome-discord-presence</Link>: The Chrome extension to interact with Discord without using desktop RPC application.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/airi-sato'>airi-sato</Link>: A multi-purpose Discord bot.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/neatified'>neatified</Link>: The Chrome extension to prevent right-click and copy blocking.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/switch-discord-desktop-image-source'>switch-discord-desktop-image-source</Link>: A script to change image CDN source of Discord desktop application.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/Serium'>Serium</Link>: A multi-purpose Discord bot, prior version of airi-sato.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/Pixiv-Fetcher'>Pixiv-Fetcher</Link>: The Pixiv content scrapper.
        </Timeline.Item>

        <h2>Infrastructure</h2>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/saebasol-the-server'>saebasol-the-server</Link>: The shell script to setup saebasol server.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/containers'>containers</Link>: The home server setup with docker compose stack and AlpineLinux.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/nginx-conf'>nginx-conf</Link>: The Nginx configuration snippets.
        </Timeline.Item>

        <h2>Reverse engineering</h2>
        <p>
          Everything is educational purpose and I close project if there is security concern.
          Permanently deleted means there is no source code anywhere and no way to recover it.
        </p>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/medium-limit-bypass'>medium-limit-bypass</Link>: The Chrome extension to bypass Medium.com free reading limit.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/clubhouse-api'>clubhouse-api</Link>: (archived) The unofficial client of Clubhouse. Literally, unofficial using iOS.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/korail-api'>korail-api</Link>: The unofficial client of Korail. Literally, unofficial using iOS.
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
          <Link href='https://github.com/seia-soto/VeraCrypt'>VeraCrypt</Link>: Translated the part of VeraCrypt project.
        </Timeline.Item>
        <Timeline.Item icon={MdLanguage}>
          <Link href='https://github.com/seia-soto/CPUTool-Translations'>CPUTool-Translations</Link>: Translated the CPU Tool project, iOS tweak to control throughput of Apple mobile CPUs.
        </Timeline.Item>
        <Timeline.Item icon={MdLanguage}>
          <Link href='https://github.com/seia-soto/shadowsocks-windows'>shadowsocks-windows</Link>: Provided initial Korean translation of shadowsocks-windows project.
        </Timeline.Item>

        <h2>Presentations</h2>

        <Timeline.Item icon={MdPresentToAll}>
          <Link href='https://github.com/seia-soto/presentation-unbundled-code-splitting-strategy'>Unbundled code splitting strategy</Link>: Explains how micro frontend works.
        </Timeline.Item>

        <h2>ETC</h2>
        <p>
          Not categorized or not featured in general.
        </p>

        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/cm-h-sasm'>cm-h-sasm</Link>: The simple scripting language made with C99 for school task.
        </Timeline.Item>
        <Timeline.Item icon={MdWeb}>
          <Link href='https://github.com/seia-soto/auberant'>auberant</Link>: My first Node.JS project, Discord bot.
        </Timeline.Item>
      </Container>
      <Divider.Full css={{ marginTop: '24px' }} />
    </>
  )
}

export default Page
