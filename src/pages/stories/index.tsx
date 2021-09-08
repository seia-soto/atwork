import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { MdArrowForward } from 'react-icons/md'
import { styled } from '../../styles/theme'
import { Context } from '../../components/Platform'
import Container from '../../components/Container'
import * as Button from '../../components/Button'
import * as Divider from '../../components/Divider'
import * as Effects from '../../components/Effects'
import Navigation from '../../layouts/Navigation'
import * as posts from '../../utils/posts'

const StoryItem = styled('div', {
  paddingBottom: '14px',

  '& p': {
    margin: 0
  }
})

interface IPageProps {
  posts: posts.IPostFrontmatter[]
}

const Page: NextPage<IPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Stories. by HoJeong Go</title>
        <meta name='description' content='그동안 많은 솔루션을 만들면서 많은 일을 겪었습니다. 당시에 제가 어떤 고민을 했는지 들어보세요.' />
      </Head>

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

      <Context>
        <Container size='md' css={{ gap: '14px' }}>
          {
            !props.posts.length && <p>죄송합니다, 아직 준비 중이므로 스토리를 사용할 수 없습니다. 조금만 더 기다려주세요.</p>
          }
          {
            !!props.posts.length && props.posts.map((post, key) => (
              <>
                <StoryItem key={key}>
                  <h2><Effects.Featured href={'/stories/' + post.title + '/'}>{post.title}</Effects.Featured></h2>
                  <p>{post.excerpt}</p>
                </StoryItem>
                <Divider.Full />
              </>
            ))
          }
        </Container>
      </Context>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const excerpts = posts.excerpts()

  return {
    props: {
      posts: excerpts
    }
  }
}

export default Page
