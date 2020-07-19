import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'
import Head from 'next/head'
//----------------------X---------STYLED-----------X-----------------
const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1.5fr 1fr;
grid-template-rows:  10rem 1fr 10rem;
column-gap: 2rem;
row-gap: 0;
${tw`h-screen mx-20 overflow-hidden`}
`
const Card = styled.div`
${tw`m-0 p-0  border border-gray-600 rounded-lg shadow-xl`}
  grid-row-start: 2;
  grid-row-end: span 1;
  ${props => props.attacks?(tw`overflow-hidden relative`): (``)}
`
const Heading = styled.h1`
${tw` border-b font-bold text-gray-700 text-4xl bg-gray-400  absolute rounded-t-lg p-3 w-full`}
`
//background-image: linear-gradient(to bottom right, aqua, yellow); ATTACKS!!!!!

const Attacks = styled.div`

  grid-row-start: 2;
  grid-row-end: span 1;
  
  ${tw`overflow-y-auto rounded-lg shadow-xl h-full`}
  ${props => {

    switch(props.type) {
      case 'grass': return (tw`bg-green-700`)
      case 'fire': return (tw`bg-red-700`)
      case 'water': return (tw`bg-indigo-700`)
      case 'bug': return (tw`bg-teal-700`)
      case 'poison': return (tw`bg-purple-700`)
      case 'flying': return (tw`bg-blue-700`)
      case 'electric': return (tw`bg-yellow-700`)
      case 'fairy': return(tw`bg-pink-700`)
      case 'ground': return(tw`bg-orange-700`)
      case 'psychic' : return (tw`bg-purple-700`)
      case 'fighting' : return (tw`bg-red-700`)
      case 'rock' : return (tw`bg-gray-700`)
      case 'ghost': return (tw`bg-gray-700`)
      case 'dragon': return (tw`bg-red-700`)        
  
      default: return (tw`bg-gray-100`)
    }
  }

}
`
const Span = styled.span`
${tw`bg-gray-100 bg-opacity-0  m-1 p-1 rounded-lg text-sm text-gray-200`}
`
const Para = styled.p`
${tw`m-4 flex flex-wrap mt-16 pt-8`}
`
//ATTACKS!!!!!
//Main
const Img = styled.img`

`


const ImgDiv = styled.div`
grid-column: 1/span 1;
grid-row: 1/span 1;
${tw`border border-red-700`}
`
const MainCard = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
grid-template-rows: 1fr 4fr 4fr;

  ${tw`border-red-700 border h-full bg-red-600`}
`
const Div = styled.div`
${tw`border-blue-700 border `}

`

const Info = styled.div`

`
//Main

//----------------------X---------STYLED-----------X-----------------
export default function Details({data, id}) {
  console.log(data.abilities)
  return (

    <Layout>
      <Container>
      {/* <Card>
        <Heading>{data.name}</Heading><img src={`/sprites/${id}.png`} />
      </Card>
      <List>
        <Heading>Attacks</Heading>
        <Para>

          {data.moves.map((m,i) => <Span key={i.toString()}>{m.move.name}</Span>)}
 
        </Para>
        </List> */}
        <Card/>
        <Card>
            
 
              {/* <ImgDiv><Img src={`/sprites/${id}.png`} /></ImgDiv>
              <Info>
                abilities: {data.abilities.map(a => a.ability.name + " ")} 
              </Info> */}
              <MainCard><Div/><Div/><Div/><Div/><Div/><Div/><Div/><Div/><Div/></MainCard>
              

        </Card>
        <Card attacks>
          <Attacks type={data.types[0].type.name}>
            <Heading>Attacks</Heading>
            <Para>
              {data.moves.map((m,i) => <Span key={i.toString()}>{m.move.name}</Span>)}   
            </Para>
          </Attacks>
        </Card>
 
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


