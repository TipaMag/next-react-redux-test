import { Provider } from 'react-redux'
import { useStore } from '../store/store'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}
