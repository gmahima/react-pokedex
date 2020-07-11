import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
`


const Layout = ({children}) => (
    <div>
        <Head>
            <title>pokémon</title>
        </Head>
        {children}
        <GlobalStyle />
    </div>
)

export default Layout