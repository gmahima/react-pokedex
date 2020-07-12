import styled from 'styled-components'
import Head from 'next/head'
// const GlobalStyle = createGlobalStyle`
//   body {
//     padding: 0;
//     margin: 0;
//     text-align: center;
//     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//       Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//       sans-serif;

//   }
// `
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     background: teal;
//     font-family: Open-Sans, Helvetica, Sans-Serif;
//   }
// `;



const Layout = ({children}) => (
    <div>

            <Head>
            <title>Pokémon</title>
            </Head>
            <div>{children}</div>

        
    </div>
)

export default Layout