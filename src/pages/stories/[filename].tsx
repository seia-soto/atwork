import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MdArrowForward, MdArrowBack, MdFileDownload, MdList } from 'react-icons/md'
import dayjs from 'dayjs'
import { styled } from '../../styles/theme'
import { Invertion } from '../../components/Platform'
import Container from '../../components/Container'
import * as Chunk from '../../components/Chunk'
import * as Button from '../../components/Button'
import * as Divider from '../../components/Divider'
import * as Effects from '../../components/Effects'
import * as Images from '../../components/Images'
import * as Header from '../../components/Header'
import Navigation from '../../layouts/Navigation'
import * as posts from '../../utils/posts'
import { contrast } from '../../styles/filter'

const Code = styled('pre', {
  width: '100%',
  borderRadius: '12px',
  padding: '16px',
  margin: '20px 0',

  color: '#E6E5E5',
  background: '#262626',
  boxShadow: '0 0 30px -9px rgba(0,0,0,.15)'
})

const components = {
  a: Effects.Featured,
  hr: Divider.Full,
  img: Images.Featured,
  pre: Code,
  Button: Button.Icon
}
const scope = { // MdArrow icons are used in same page, final cost will be MdFileDownload.
  MdArrowForward,
  MdArrowBack,
  MdFileDownload
}

interface IPageProps {
  post: posts.IPost
  source: MDXRemoteSerializeResult
  next: posts.IPostFrontmatter[]
  notFound?: boolean
}

const Page: NextPage<IPageProps> = (props) => {
  const date = dayjs(props.post.frontmatter.date).format('YYYY-MM-DD')

  return (
    <>
      <Head>
        <title>{props.post.frontmatter.title} | Story by HoJeong Go</title>
        <meta name='description' content={props.post.frontmatter.excerpt} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'BlogPosting',
              headline: props.post.frontmatter.title,
              description: props.post.frontmatter.excerpt,
              author: {
                '@type': 'Person',
                name: 'HoJeong Go'
              },
              datePublished: date
            })
          }}
        />
      </Head>

      <Navigation />
      <Divider.Full />

      <Header.Wrapper
        css={{
          backgroundImage: `${contrast}, url(${props.post.frontmatter.image || 'https://source.unsplash.com/user/xps'})`
        }}
      >
        <Header.Context size='md' layout='story'>
          <div>
            <h1>
              {props.post.frontmatter.title}
            </h1>
            <p>
              {date}, {props.post.frontmatter.excerpt}
            </p>
            {
              !props.post.frontmatter.image && (
                <p>
                  *??? ?????? ?????? ???????????? <Effects.Featured target='_blank' href='https://unsplash.com/@xps'>Unsplash@XPS</Effects.Featured>?????? ?????????????????????.
                </p>
              )
            }
            <Button.Icon theme='black' icon={MdArrowBack} href='/stories' left>Story ???????????? ????????????</Button.Icon>
          </div>
        </Header.Context>
      </Header.Wrapper>
      <Divider.Full />

      <Container
        size='md'
        css={{
          '& h1,h2,h3,h4,h5,h6': {
            color: '$blue400'
          },
          '& blockquote': {
            color: '$black600'
          }
        }}
      >
          {
            props.notFound && <p>??? ???????????? ???????????? ????????????. ?????? ???????????? ???????????????.</p>
          }
          {
            !props.notFound && <MDXRemote {...props.source} components={components} scope={scope} lazy />
          }
        </Container>
      <Divider.Full />

      <Invertion>
        <Container
          size='md'
          css={{

          }}
        >
          <h2>
            ???????????? ???????????? ??????????????? ?????? ???????????????.<br />
            ?????? ???????????? ??????????????????????
          </h2>
          <p>
            ???????????? ???????????? ????????? ??????????????? ????????? ???????????? ???????????????
            ???????????? ??? ??????????????? ????????? ??????????????? ????????????.
          </p>
          <Chunk.Group direction='column' align='left' css={{ gap: '6px' }}>
            <Button.Icon theme='black' icon={MdArrowBack} href='/stories' left invertion>Story ???????????? ????????????</Button.Icon>
            <Button.Icon theme='black' icon={MdList} target='_blank' href='https://typed.sh/' left invertion>Typed.sh?????? ??? ?????? ??? ??????</Button.Icon>
          </Chunk.Group>
          <p></p>
          <Divider.Full invertion />

          {
            !props.next.length && <p>???????????????, ?????? ?????? ???????????? ????????? ??? ????????????. ????????? ??? ??????????????????.</p>
          }
          {
            !!props.next.length && props.next
              .map((post, key) => (
                <Chunk.Item key={key}>
                  <h3><Effects.Featured href={'/stories/' + post.link + '/'} invertion>{post.title}</Effects.Featured></h3>
                  <p>{dayjs(post.date).format('YYYY-MM-DD')}, {post.excerpt}</p>
                </Chunk.Item>
              ))
          }
        </Container>
      </Invertion>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = posts.list()

  // NOTE: Normalize
  if (Array.isArray(ctx.params.filename)) {
    ctx.params.filename = ctx.params.filename[0]
  }

  const filename = ctx.params.filename + '.mdx'

  if (!list.includes(filename)) {
    return {
      props: {
        notFound: true
      }
    }
  }

  const post = posts.read(filename)
  const excerpts = posts.excerpts()
    .sort(() => 0.5 - Math.random())
    .filter(item => item.title !== post.frontmatter.title)
    .slice(0, 3)

  return {
    props: {
      post: {
        ...post,
        content: ''
      },
      source: await serialize(post.content),
      next: excerpts
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts
    .list()
    .map(post => post.replace('.mdx', ''))
    .map(post => ({
      params: {
        filename: post
      }
    }))

  return {
    paths,
    fallback: false
  }
}

export default Page
