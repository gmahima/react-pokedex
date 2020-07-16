import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'

const HeadingDiv = styled.div`
${tw `
sm:text-5xl sm:py-16 py-2 text-4xl
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
px-8 sm:px-10
mb-10
`}
@media (min-width: 640px) {
  grid-template-columns: repeat(auto-fit, minmax(10em, 20em))
}

`

const Card = styled.div`
display: grid;
${tw`shadow-md border border-gray-200
  cursor-pointer
  rounded-lg
  hover:shadow-sm

`}
@media(min-width: 640px) {
  display: grid;
  grid-template-columns: 1fr 2fr;
}


}
`
// ${props => {

//   switch(props.type) {
//     case 'grass': return (tw`hover:bg-green-100`)
//     case 'fire': return (tw`hover:bg-red-100`)
//     case 'water': return (tw`hover:bg-blue-100`)
//     case 'bug': return (tw`hover:bg-teal-100`)
//     default: return (tw`hover:bg-gray-100`)
//   }
// }

const ImgDiv = styled.div`
${tw`
 w-full p-10 sm:w-full sm:px-0  
`}
`
const Img = styled.img`
${tw`
 w-full rounded-full
`}
${props => {

      switch(props.type) {
        case 'grass': return (tw`bg-green-100`)
        case 'fire': return (tw`bg-red-100`)
        case 'water': return (tw`bg-indigo-100`)
        case 'bug': return (tw`bg-teal-100`)
        case 'poison': return (tw`bg-purple-200`)
        case 'flying': return (tw`bg-blue-100`)
        case 'electric': return (tw`bg-yellow-300`)
        case 'fairy': return(tw`bg-pink-200`)
        case 'ground': return(tw`bg-orange-300`)
        case 'psychic' : return (tw`bg-purple-400`)
        case 'fighting' : return (tw`bg-red-600`)
        case 'rock' : return (tw`bg-gray-300`)
        case 'ghost': return (tw`bg-green-400`)
        case 'dragon': return (tw`bg-red-300`)        

        default: return (tw`bg-gray-100`)
      }
    }
  }
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
${tw ` m-1 py-1 px-2 rounded-lg bg-gray-100 text-center align-middle text-gray-600`}


`


export default function Home({allPokemon}) {
  return (

      <Layout>
        <HeadingDiv><h1>Pokédex</h1></HeadingDiv>
        <Container>
          {console.log(allPokemon)}
          {allPokemon.map((p, i) => <Link href='/details/[id]' as={`details/${i+1}`} key={p.name}><A><PokeCard p={p}  id={i+1}/></A></Link>)}
        </Container>
        
      </Layout>


  )
}

const PokeCard = ({p, id}) => (

      <Card type={p.types[0].type.name}>
          <ImgDiv>
            <Img src={`/sprites/${id}.png`} type={p.types[0].type.name}/>
          </ImgDiv>
          <CardContent>
            <Name>{p.name}</Name>     
            <CardInfo>
              
              {p.types.map(t => <Info>{t.type.name}</Info>)}
              <Info>{"base-xp " + p.base_experience }</Info>
            </CardInfo>      
          </CardContent>
      </Card>

)




export async function getStaticProps () {
  
  const allPokemon = await getAllPokemon()
  return {props: {allPokemon}};
}

