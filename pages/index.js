import {getAllPokemon} from '../lib/data'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'
const Name = styled.h4`

`

const Container = styled.div`
display: grid;
${tw `bg-black`}
grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
grid-gap: 30px;
padding: 0 30px;
justify-content: center;
margin-bottom: 40px;
`
const Heading = styled.h1`
font-size: 3em;
padding: 60px 0;
@media (max-height: 500px) {
  padding: 10px 0;
}
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
        <Heading>Pokédex</Heading>
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

