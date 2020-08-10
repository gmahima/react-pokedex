import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled, {css, keyframes} from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'
import useSWR from 'swr'

const a = keyframes`
0%, 100%{
  opacity: 1;
}
50% {
  opacity: 0;
}
`

const Top = styled("div")`
${tw` w-full h-10 sm:h-20 flex items-center justify-around  border border-b  border-gray-300 bg-gray-100 sm:fixed`}
`

const HeadingDiv = styled.div`
${tw `
sm:text-3xl
font-black text-gray-700 
`}
`
const A = styled.a`
color: black;
text-decoration: none;
`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(6em, 17em));
grid-gap: 2em;
justify-content: center;
${tw`
px-8 sm:p-12 sm:mt-16
py-10`}
@media (min-width: 640px) {
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem))
}
`

const Card = styled.div`
display: grid;
place-content: center;
place-items: center;
height: auto;
${tw` border-2 border-gray-700
  cursor-pointer
  rounded-lg
  hover:shadow-sm
  shadow-xl 
  bg-white 
  pl-4
 
`}
@media(min-width: 640px) {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
}
`
const variants = css`${props => {
console.log(props.type)
  switch(props.type) {
    case 'grass': return (tw`bg-green-100`)
    case 'fire': return (tw`bg-orange-200`)
    case 'water': return (tw`bg-indigo-200`)
    case 'bug': return (tw`bg-teal-200`)
    case 'poison': return (tw`bg-purple-300`)
    case 'flying': return (tw`bg-blue-200`)
    case 'electric': return (tw`bg-yellow-400`)
    case 'fairy': return(tw`bg-pink-300`)
    case 'ground': return(tw`bg-yellow-600`)
    case 'psychic' : return (tw`bg-purple-500`)
    case 'fighting' : return (tw`bg-red-600`)
    case 'rock' : return (tw`bg-gray-400`)
    case 'ghost': return (tw`bg-gray-300`)
    case 'dragon': return (tw`bg-red-100`)        
    default: return (tw`bg-gray-100`)
  }
}}`



const ImgDiv = styled.div`
${tw`
 w-full p-10 sm:w-full sm:px-0  
`}
`
const Img = styled.img`
${tw`
 w-full rounded-full
`}
${variants}
# animation: ${a} 1s infinite;
`
// const Card2 = styled.div`
//   display: grid;
//   grid-gap: 1em;
//   justify-content: center;
//   justify-items: stretch
//   ${tw`shadow-xl
//       text-white
//     cursor-pointer
//     rounded-lg
//     w-64
//     py-4 px-0

//     `}
    

// ${props => {

//     switch(props.type) {
//       case 'grass': return (tw`bg-green-700`)
//       case 'fire': return (tw`bg-red-700`)
//       case 'water': return (tw`bg-blue-700`)
//       case 'bug': return (tw`bg-teal-700`)
//       default: return (tw`bg-black`)
//     }
//   }}
// `

const Name = styled.h4`
${tw `font-bold text-gray-600 text-left text-xl sm:text-2xl capitalize`}
`
const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${tw`
   py-4 px-5 rounded-lg
  `}
  @media(min-width: 640px) {
    align-content: center;
  }
  
`
const CardInfo = styled.div`
#${tw`my-5 flex justify-start items-center flex-wrap`}
`
const Info = styled.span `
${tw ` m-1 py-1 px-2 rounded-lg shadow-sm bg-gray-400 bg-opacity-25  text-center align-middle text-gray-600`}
`

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export default function Home() {
  const { data, error } = useSWR(url, fetcher)
  if (error) return <div><p>failed to load</p></div>
  if (!data) return <div><p>loading...</p></div>
  return (

      <Layout>
        <Top><HeadingDiv>The Kanto Pokedex</HeadingDiv></Top>
        <Container>
          {data.results.map((p, i) => <Link href='/details/[id]' as={`details/${i+1}`} key={p.name}><A><PokeCard p={p}  id={i+1}/></A></Link>)}
        </Container>
        
      </Layout>


  )
}

const PokeCard = ({p, id}) => (

      <Card id={id}>
          <ImgDiv>
            <Img src={`/sprites/${id}.png`}/>
          </ImgDiv>
          <CardContent>
            <Name>{p.name}</Name>     
            {/* <CardInfo>
              
              {p.types.map(t => <Info id={t.type.name}>{t.type.name}</Info>)}
              <Info>{"base-xp " + p.base_experience }</Info>
            </CardInfo>       */}
          </CardContent>
      </Card>

)




// export async function getStaticProps () {
  
//   const allPokemon = await getAllPokemon()
//   return {props: {allPokemon}};
// }