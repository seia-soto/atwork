import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MdArrowForward } from 'react-icons/md'
import { Context } from '../../components/Platform'
import Container from '../../components/Container'
import * as Button from '../../components/Button'
import * as Divider from '../../components/Divider'
import Navigation from '../../layouts/Navigation'
import * as posts from '../../utils/posts'

interface IPageProps {
  post: posts.IPost
  source: MDXRemoteSerializeResult
  notFound?: boolean
}

const Page: NextPage<IPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.frontmatter.title} | Story by HoJeong Go</title>
        <meta name='description' content={props.post.frontmatter.excerpt} />
      </Head>

      <Navigation />

      <Container size='md'>
        <h1>
          {props.post.frontmatter.title}
        </h1>
        <p>
          {props.post.frontmatter.excerpt}
        </p>
        <Button.Icon theme='black' icon={MdArrowForward} href='/stories'>Story 목록으로 돌아가기</Button.Icon>
      </Container>
      <Divider.Full />

      <Context>
        <Container size='md' css={{ gap: '14px' }}>
          {
            props.notFound && <p>이 스토리는 존재하지 않습니다. 다른 스토리를 읽어보세요.</p>
          }
          {
            !props.notFound && <MDXRemote {...props.source} />
          }
        </Container>
      </Context>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = posts.list()

  // NOTE: Normalize
  if (Array.isArray(ctx.params.title)) {
    ctx.params.title = ctx.params.title[0]
  }

  const filename = ctx.params.title + '.mdx'

  if (!list.includes(filename)) {
    return {
      props: {
        notFound: true
      }
    }
  }

  const post = posts.read(filename)

  return {
    props: {
      post: {
        ...post,
        content: ''
      },
      source: await serialize(post.content)
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts
    .list()
    .map(post => post.replace('.mdx', ''))
    .map(post => ({
      params: {
        title: post
      }
    }))

  return {
    paths,
    fallback: false
  }
}

export default Page
