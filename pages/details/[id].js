// import Layout from '../../components/Layout'
// import styled from 'styled-components'
// import tw from 'twin.macro'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import useSWR from 'swr'

// const Title = styled.div`
//   ${tw`flex items-center`}
// `
// const Heading = styled.h1`

// font-size: 3em;
// text-transform: capitalize;
// @media(max-width: 500px) {
//   font-size: 2em;
//   font-weight: 600;
// }
// `
// const Container = styled.div`
// display: grid;
// justify-items: center;
// justify-content: center;
// align-content: center;
// min-height: 100vh;
// @media(max-width: 500px) {
//   margin: 10px 10px 40px 10px;
//   justify-content: start;
//  }

// `

// const Card = styled.div`
//   margin: 50px auto;
//   display: grid;
//   box-shadow: 10px 10px 50px #DDD;
//   border-style: solid;
//   border-width: 2px;
//   justify-items: center;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   max-width: 400px;
//   padding: 30px;
//   @media(max-width: 500px) {
//    padding: 10px 0;
//    max-width: 200px;
//    justify-self: center;
    
//   }


// `
// const List = styled.div`
//   margin: 0 20px;
//   display: grid;
//   box-shadow: 10px 10px 50px #DDD;
//   border-style: solid;
//   border-width: 1px;
//   padding: 30px;
//   text-align: center;
//   @media(max-width: 500px) {
//     margin: 0 10px;
//     padding: 10px;

    
    
//   }

// `

// const Span = styled.span`
// border: 1px solid #eee;
// margin: 5px;
// padding:  5px 10px;
// border-radius: 5px;
// &:hover {
//   border-color: #999
// }
// `

// const Para = styled.p`
// width: 1000px;
// display: flex;
// flex-wrap: wrap;
// @media(max-width: 500px) {
//   width: 100%;
// }

// `
// export default function Details() {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const router = useRouter()
  // const url =  `https://pokeapi.co/api/v2/pokemon/2/`

  // console.log(router)
  // const { data, error } = useSWR(url, fetcher)
  // if (error) return <div><p>failed to load</p></div>
  // if (!data) return <div><p>loading...</p></div>
//   return (

//     <Layout>
//       <Container>
//         <Title><Heading>{data.name}</Heading><img src={`/sprites/${data.id}.png`} /></Title>
        

//       <List>
//         <h2>Attacks</h2>
//         <Para>

//           {data.moves.map((m,i) => <Span key={i.toString()}>{m.move.name}</Span>)}
 
//         </Para>
//         </List>
 
//         </Container>
//     </Layout>
//   )
// }


import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'

//----------------------X---------STYLED-----------X-----------------
const Top = styled("div")`
display: grid;
${tw` w-full h-10 sm:h-20  border border-b  border-gray-300 bg-gray-100 `}
grid-template-columns: auto 1fr;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;
`


const Nav= styled.h1`
${tw `
sm:text-sm
font-thin text-gray-700 border rounded-lg ml-3 px-2 py-2 hover:cursor-pointer hover:bg-gray-300 bg-gray-400
`}
`
const Main=styled.h1`
${tw`sm:text-3xl font-black text-gray-700`}
`

const Heading = styled.h1`
${tw` border-b font-bold text-4xl bg-gray-700 text-gray-100 rounded-t-lg p-3 w-full`}
`
// background-image: linear-gradient(to bottom right, aqua, yellow); ATTACKS!!!!!

const Attacks = styled.div`
  
  ${tw`mt-5 sm:ml-10 rounded-lg shadow-lg bg-gray-100 self-center max-w-2xl`}
}
`
const Content = styled.div`
${tw`flex items-center justify-center py-10 sm:flex-row flex-col sm:m-0 sm:px-0`}
`
const Info = styled.span`
${tw`text-gray-700   m-1 p-1 rounded-lg text-sm hover:shadow-sm  border border-gray-300 cursor-default`}
`
const Para = styled.p`
${tw`m-4 flex flex-wrap items-center`}
`
//ATTACKS!!!!!
//Main
const Img = styled.img`
${tw`w-full h-full`}
`
const ImgDiv = styled.div`
  ${tw`w-3/5 sm:w-2/5 h-full bg-gray-500 bg-opacity-25 shadow-inner rounded-lg flex justify-center mb-3`}
`
const MainCardInfo= styled.div`
justify-self: center;
  ${tw` bg-gray-500 bg-opacity-25 shadow-inner rounded-lg w-11/12 p-3 `}
`
const Name = styled.div`
${tw`flex justify-between bg-gray-700 text-gray-100 px-2`}
`
const Data=styled.div`
${tw`flex justify-between text-gray-700 border-b border-gray-700 mb-4`}
`
const DataDiv=styled.div`
  ${tw`px-3 mt-5`}
`
const MainCard = styled.div`
${tw`border-gray-300 rounded-lg text-white border-8  py-5 bg-gray-100 sm:w-1/3 flex flex-col justify-center items-center shadow-2xl`}
`

const NameSpan=styled.span`
${tw`uppercase  text-xl font-black py-2 px-4`}
sub {
  ${tw` lowercase`}
  
  }
  
`
const KeySpan=styled.span`
${tw`uppercase  text-sm font-bold`}
`
const ValSpan=styled.span`
${tw`  text-sm font-bold `}
span {
  ${tw `px-1`}
}
`


//Main

//----------------------X---------STYLED-----------X-----------------
export default function Details() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const router = useRouter()
  console.log(router.query)
  const url =  `https://pokeapi.co/api/v2/pokemon/${router.query.id}/`

  console.log(router)
  const { data, error } = useSWR(url, fetcher)
  if (error) return <div><p>failed to load</p></div>
  if (!data) return <div><p>loading...</p></div>
  return (

    <Layout>
      <Top><Link href="/"><Nav>back to PokeDex</Nav></Link><Main>PokéCard</Main></Top>
      <Content>
        
        <MainCard type={(data.types[0].type.name)}>
          <ImgDiv>
            <Img src={`/sprites/${data.id}.png`} />
          </ImgDiv> 
          <MainCardInfo>
            <Name>
              <NameSpan>#{data.id}</NameSpan>
              <NameSpan>{data.name}</NameSpan>
              <NameSpan><sub>xp.</sub>{data.base_experience}</NameSpan>
            </Name>
            <DataDiv>            
              <Data>
                <KeySpan>order</KeySpan>
                <ValSpan>{data.order}</ValSpan>
              </Data>
              <Data>
                <KeySpan>types</KeySpan>
                <ValSpan>{data.types.map(t => <span key={t.type.name}>{t.type.name}</span>)}</ValSpan>
              </Data>
              <Data>
                <KeySpan>abilities</KeySpan>
                <ValSpan>{data.abilities.map(a => <span key={a.ability.name}>{a.ability.name}</span>)}</ValSpan>
              </Data>
              <Data>
                <KeySpan>height</KeySpan>
                <ValSpan>{data.height}</ValSpan>
              </Data>
              <Data>
                <KeySpan>weight</KeySpan>
                <ValSpan>{data.weight}</ValSpan>
              </Data>
            </DataDiv>
          </MainCardInfo> 
        </MainCard>

        <Attacks >
          <Heading>Attacks</Heading>
          <Para>
            {data.moves.map((m,i) => <Info key={i.toString()}>{m.move.name}</Info>)}   
          </Para>
        </Attacks>
      </Content >
    </Layout>
  )
}

