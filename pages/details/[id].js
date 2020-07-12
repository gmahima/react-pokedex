import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
const Heading = styled.h1`
font-size: 3em;
text-transform: capitalize
`
const Container = styled.div`
display: grid;
justify-items: center;
`

const Card = styled.div`
  margin: 50px auto;
  display: grid;
  box-shadow: 10px 10px 50px #DDD;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 400px;
  padding: 30px;

`
const List = styled.div`
  margin: 0 20px;
  display: grid;
  box-shadow: 10px 10px 50px #DDD;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  padding: 30px;
  text-align: center;
`

const Span = styled.span`
border: 1px solid #eee;
margin: 5px;


`

const Para = styled.p`
width: 1000px;
display: flex;
flex-wrap: wrap;
`
export default function Details({data, id}) {
  return (

    <Layout>
      <Container>
      <Card>
        <img src={`/sprites/${id}.png`} />
        <Heading>{data.name}</Heading> 
      </Card>
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