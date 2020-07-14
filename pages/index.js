import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'

const Name = styled.h4`

`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
grid-gap: 30px;
padding: 0 30px;
justify-content: center;
`
const Heading = styled.h1`
font-size: 3em;

`

const Card = styled.div`
font-weight: normal;
  display: grid;
  box-shadow: 3px 3px 20px #DDD;
  border-style: solid;
  border-width: 1px;
  justify-items: center;
  &:hover{
    border-color: teal;
    color: teal;
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
        <Heading>Pokémon</Heading>
        <Container>
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

