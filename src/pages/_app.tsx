import type { AppProps } from 'next/app'
import Platform from '../layouts/Platform'
import 'normalize.css'
import '../styles/platform.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Platform>
      <Component {...pageProps} />
    </Platform>
  )
}

export default MyApp
