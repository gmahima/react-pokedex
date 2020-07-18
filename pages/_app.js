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
//   const getAllPokemon = async () => {
//     let promises = []
//     for(let i=1; i<=1; i++) {
//         promises.push(fetch(`http://pokeapi.co/api/v2/pokemon/${i}`).then(res=>res.json()))
//     }

//     const data = await Promise.all(promises).then(values => values)
//     return data;
// }
// const list = []
// for(let i=1; i<=1; i++) {
//   list.push(`http://pokeapi.co/api/v2/pokemon/${i}/`)
// }

  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon/2/", fetcher)

    // return (
    //     <>
    //         <GlobalStyle />
            
    //         <Component {...pageProps} />
    //     </>
    // )
    if (error) return (<>
                          <GlobalStyle />
                          
                          <div>error</div>
                      </>)
            if (!data) return(
              <>
                  <GlobalStyle />
                  
                  <div>loading...</div>
              </>
            )
            return (
              <>
                  <GlobalStyle />
                  
                  <Component {...pageProps} data={data}/>
              </>
            )
  }

  export default MyApp