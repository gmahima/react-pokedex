import { createGlobalStyle } from 'styled-components'
import React from 'react'
import 'tailwindcss/dist/base.min.css'
import tw, { css } from 'twin.macro'
import useSWR from 'swr'
import fetch from 'unfetch'
 
const fetcher = url => fetch(url).then(r => r.json())
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-align: center;

  }
`;

function MyApp({ Component, pageProps }) {
  const { data, error } = useSWR("http://pokeapi.salestock.net/api/v2/pokedex/2/", fetcher)

    // return (
    //     <>
    //         <GlobalStyle />
            
    //         <Component {...pageProps} />
    //     </>
    // )
    if (error) return <div>failed to load</div>
            if (!data) return <div>loading...</div>
            return <div>{console.log(data)}!</div>
  }

  export default MyApp