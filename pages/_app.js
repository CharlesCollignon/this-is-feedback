import '../styles/globals.css'
import { AuthProvider } from '../lib/auth'
import { ThemeProvider } from '@emotion/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
