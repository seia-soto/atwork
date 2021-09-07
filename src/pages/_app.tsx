import type { AppProps } from 'next/app'
import { RecoilRoot, useRecoilValue } from 'recoil'
import 'normalize.css'
import { light, dark, globals } from '../styles/theme'
import { Foundation } from '../components/Platform'
import * as atoms from '../atoms'
import { useEffect, useState } from 'react'

const ThemeProvider = ({ children }: { [keys: string]: unknown }) => {
  const [theme, setTheme] = useState(light)
  const isLight = useRecoilValue(atoms.light)

  useEffect(() => {
    // NOTE: We need to break out SSR state
    setTheme(isLight ? light : dark)
  }, [isLight])

  return (
    <div className={theme}>{children}</div>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  globals()

  return (
    <RecoilRoot>
      <ThemeProvider>
        <Foundation>
          <Component {...pageProps} />
        </Foundation>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
