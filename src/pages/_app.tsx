// すべてのページコンポーネントの親となるコンポーネント

import React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { defaultTheme } from 'default-theme'
import { JsxEmit } from 'typescript'

const cache = createCache({ key: 'css', prepend: true })
cache.compat = true

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp
