import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'

const Title = styled.div`
  ${tw`flex items-center`}
`
const Heading = styled.h1`

font-size: 3em;
text-transform: capitalize;
@media(max-width: 500px) {
  font-size: 2em;
  font-weight: 600;
}
`
const Container = styled.div`
display: grid;
justify-items: center;
justify-content: center;
align-content: center;
min-height: 100vh;
@media(max-width: 500px) {
  margin: 10px 10px 40px 10px;
  justify-content: start;
 }

`

const Card = styled.div`
  margin: 50px auto;
  display: grid;
  box-shadow: 10px 10px 50px #DDD;
  border-style: solid;
  border-width: 2px;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 400px;
  padding: 30px;
  @media(max-width: 500px) {
   padding: 10px 0;
   max-width: 200px;
   justify-self: center;
    
  }


`
const List = styled.div`
  margin: 0 20px;
  display: grid;
  box-shadow: 10px 10px 50px #DDD;
  border-style: solid;
  border-width: 1px;
  padding: 30px;
  text-align: center;
  @media(max-width: 500px) {
    margin: 0 10px;
    padding: 10px;

    
    
  }

`

const Span = styled.span`
border: 1px solid #eee;
margin: 5px;
padding:  5px 10px;
border-radius: 5px;
&:hover {
  border-color: #999
}
`

const Para = styled.p`
width: 1000px;
display: flex;
flex-wrap: wrap;
@media(max-width: 500px) {
  width: 100%;
}

`
export default function Details({data, id}) {
  console.log({data, id})
  return (

    <Layout>
      <Container>
        <Title><Heading>{data.name}</Heading><img src={`/sprites/${id}.png`} /></Title>

      <List>
        <h2>Attacks</h2>
        <Para>

          {data.moves.map((m,i) => <Span key={i.toString()}>{m.move.name}</Span>)}
 
        </Para>
        </List>
 
        </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getIds()
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getPokemonDetails(params.id)
  return {
    props: {
      id: params.id,
      data: data.details
    }
  }
}


