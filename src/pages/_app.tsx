import type { AppProps } from 'next/app'
import 'normalize.css'
import '../styles/platform.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
