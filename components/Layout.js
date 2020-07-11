import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    text-align: center;
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
        <Heading>Pokémon</Heading>
        {children}
        <GlobalStyle />
        
    </div>
)
const Heading = styled.h1`
font-size: 2em;
padding-top: 3em;
text-align: center;

`
export default Layout