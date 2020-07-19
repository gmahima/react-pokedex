import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'
import Head from 'next/head'
//----------------------X---------STYLED-----------X-----------------
const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1.5fr 1fr;
grid-template-rows:  10em 1fr 10em;
column-gap: 2rem;
row-gap: 0;
${tw`h-screen mx-20 overflow-hidden`}
`
const Card = styled.div`
${tw`m-0 p-0  overflow-hidden relative border border-gray-600 rounded-lg shadow-xl`}
  grid-row-start: 2;
  grid-row-end: span 1;
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
${tw`w-full h-full`}
`
const ImgDiv = styled.div`
grid-column: 2/span 1;
grid-row: 2/span 1;

${tw`bg-black`}
`
const MainCard = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: 0.2fr 0.4fr 1fr;
grid-gap: 1em;
${tw` text-gray-700 bg-red-100`}
`
const MainHeading = styled(Heading)`

${tw` text-center uppercase `} 
`
const Info = styled.div`
grid-row: 3/span 1;
grid-column: 1/span 3;

${tw`bg-gray-400 text-gray-700 overflow-auto`}
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
            <MainHeading>{data.name}</MainHeading>
            <MainCard>
              <ImgDiv><Img src={`/sprites/${id}.png`} /></ImgDiv>
              <Info>
                abilities: {data.abilities.map(a => a.ability.name + " ")} 
              </Info>
          </MainCard>
        </Card>
        <Card>
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


