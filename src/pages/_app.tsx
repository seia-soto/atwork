import type { AppProps } from 'next/app'
import { globals, dark } from '../styles/theme'
import 'normalize.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globals()

  return <div /* className={dark} */>
    <Component {...pageProps} />
  </div>
}

export default MyApp
