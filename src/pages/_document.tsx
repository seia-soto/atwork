import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/theme'

const MyDocument = () => {
  return (
    <Html lang='ko'>
      <Head>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link rel='preload' href='/images/avatar.webp' as='image' />

        <script async defer data-domain='seia.io' src='https://trkrpt-submit.cidx.rpta1-c6h16.seia.io/a' />
        <script async defer data-domain='seia.io' src='https://trkrpt-submit.cidx.rpta12-c3h5.seia.io/a' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
