import { createGlobalStyle } from 'styled-components'
import React from 'react'
import 'tailwindcss/dist/base.min.css'
import tw, { css } from 'twin.macro'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-align: center;
    ${tw`bg-gray-200`}
  }
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
  }

  export default MyApp