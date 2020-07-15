import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'
const Name = styled.h4`
${tw`border-b border-black`}
`
const A = styled.a`
color: black;
text-decoration: none;


`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
grid-gap: 3em;
justify-content: center;
${tw`
px-8
pb-2
`}

`
const HeadingDiv = styled.div`
${tw `
sm:text-5xl sm:py-16 py-2 text-4xl

`}
`
const Img = styled.img`
${tw`
bg-white bg-opacity-75 rounded-full

`}
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
const Card = styled.div`
  display: grid;
  grid-gap: 1em;

  ${tw`shadow-xl
      text-white
    cursor-pointer
    rounded-lg
    w-64
    py-4 px-0

    `}
    

${props => {

    switch(props.type) {
      case 'grass': return (tw`bg-green-700`)
      case 'fire': return (tw`bg-red-700`)
      case 'water': return (tw`bg-blue-700`)
      case 'bug': return (tw`bg-teal-700`)
      default: return (tw`bg-black`)
    }
  }}
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
        {console.log(p.types[0].type.name)}
        <Name>{p.name}</Name>
        <Img src={`/sprites/${id}.png`} />      
        <span>height: {p.height}</span>
        <span>weight: {p.weight}</span>
        <span>base exp: {p.base_experience}</span>

      </Card>

)




export async function getStaticProps () {
  
  const allPokemon = await getAllPokemon()
  return {props: {allPokemon}};
}

