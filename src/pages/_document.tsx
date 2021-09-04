import { Html, Head, Main, NextScript } from 'next/document'

const MyApp = () => {
  return (
    <Html>
      <Head>
        {
          /**
           * (font) Pretendard
           */
        }
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyApp
