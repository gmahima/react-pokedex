import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'
const Name = styled.h4`

`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
grid-gap: 2em;
justify-content: center;
${tw`
px-8
pb-2
`}

`
const HeadingDiv = styled.div`
${tw `
sm:text-5xl sm:py-16 py-2 text-4xl
bg-red-100
`}
`

const Card = styled.div`
font-weight: normal;
  display: grid;
  box-shadow: 0px 0px 8px #CCC;
  border-style: solid;
  border-width: 1px;
  justify-items: center;
  border-radius: 15px;
  border-color: #DDD;

  &:hover{
    border-color: black;
    border-width: 1px;

    color: black;
    cursor: pointer
  }
`
const A = styled.a`
color: black;
text-decoration: none;


`

export default function Home({allPokemon}) {
console.log(allPokemon)
  return (

      <Layout>
        <HeadingDiv><h1>Pokédex</h1></HeadingDiv>
        <Container>
          {console.log(allPokemon.results)}
          {allPokemon.results.map((p, i) => <Link href='/details/[id]' as={`details/${i+1}`} key={p.name}><A><PokeCard p={p}  id={i+1}/></A></Link>)}
        </Container>
        
      </Layout>


  )
}

const PokeCard = ({p, id}) => (

      <Card>
        <img src={`/sprites/${id}.png`} />
        <Name>{p.name}</Name>

      </Card>

)




export async function getStaticProps () {
  const allPokemon = await getAllPokemon()

  return {props: {allPokemon}};
}

