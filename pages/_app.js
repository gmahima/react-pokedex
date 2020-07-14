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
    background: red;
    ${tw `bg-black`}
  }
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
          {/* <div css={[
              css`
              body {
                margin: 0;
                padding: 0;
                font-family: Open-Sans, Helvetica, Sans-Serif;
                text-align: center;
                background: red;
              }
              `
            ]}
          /> */}
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
  }

  export default MyApp