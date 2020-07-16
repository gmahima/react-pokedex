import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'

const A = styled.a`
color: black;
text-decoration: none;


`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(6em, 15em));
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
const ImgDiv = styled.div`
display: grid;
place-content: center;
place-items : center;
`
const Img = styled.img`

${tw`
bg-white bg-opacity-75 rounded-full m-3
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
${tw`shadow-xl
  cursor-pointer
  rounded-lg
  py-2 px-2
`}

`
const Name = styled.h4`

`
const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;


  ${tw`
   border border-white py-0 px-0 rounded-lg
  `}
`
const CardInfo = styled.div`
#${tw`my-5 flex justify-center`}

`
const Info = styled.span `
${tw `border m-1 p-1 rounded-lg`}

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
        <Name>{p.name}</Name>
        <CardContent>
          <ImgDiv>
            <Img src={`/sprites/${id}.png`} />
          </ImgDiv>     
          <CardInfo>
          <Info>{p.base_experience + " xp"}</Info>
          {p.types.map(t => <Info>{t.type.name}</Info>)}
          </CardInfo>      
        </CardContent>
      </Card>

)




export async function getStaticProps () {
  
  const allPokemon = await getAllPokemon()
  return {props: {allPokemon}};
}

