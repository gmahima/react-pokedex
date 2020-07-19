import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'
import Head from 'next/head'
//----------------------X---------STYLED-----------X-----------------
const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1.5fr 0.8fr;
grid-template-rows:  10rem 1fr 10rem;
column-gap: 2rem;
row-gap: 0;
${tw`h-screen mx-20 sm:overflow-hidden`}
`
const Card = styled.div`
${tw`m-0 p-0  border border-gray-600 rounded-lg shadow-xl`}
  grid-row-start: 2;
  grid-row-end: span 1;
  ${props => {
    if(props.attacks) {
      return (tw`sm:overflow-hidden sm:relative`)
    }
    if(props.main) {
      return (tw `border-none`)
    }
  }}


`
const Heading = styled.h1`
${tw` border-b font-bold text-gray-700 text-4xl bg-gray-400  sm:absolute rounded-t-lg p-3 w-full`}
`
// background-image: linear-gradient(to bottom right, aqua, yellow); ATTACKS!!!!!

const Attacks = styled.div`

  grid-row-start: 2;
  grid-row-end: span 1;
  
  ${tw`sm:overflow-y-auto rounded-lg shadow-xl h-full`}
  ${props => {

    switch(props.type) {
      case 'grass': return (tw`bg-green-700`)
      case 'fire': return (tw`bg-orange-700`)
      case 'water': return (tw`bg-indigo-700`)
      case 'bug': return (tw`bg-teal-700`)
      case 'poison': return (tw`bg-purple-700`)
      case 'flying': return (tw`bg-blue-700`)
      case 'electric': return (tw`bg-yellow-700`)
      case 'fairy': return(tw`bg-pink-700`)
      case 'ground': return(tw`bg-yellow-700`)
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
${tw`w-full`}
`
const ImgDiv = styled.div`
  justify-self: center;
  ${tw`w-1/2 bg-gray-500 bg-opacity-25 shadow-inner rounded-lg`}
`
const MainCardInfo= styled.div`
justify-self: center;
  ${tw` bg-gray-500 bg-opacity-25 shadow-inner rounded-lg w-11/12 p-3 `}
`
const Name = styled.div`
${tw`flex justify-between bg-gray-700 text-gray-100 px-2`}
`
const MainCard = styled.div`
${props => {

  switch(props.type) {
    case 'grass': return (tw`bg-gray-200`)
        case 'fire': return (tw`bg-orange-700`)
        case 'water': return (tw`bg-indigo-700`)
        case 'bug': return (tw`bg-teal-700`)
        case 'poison': return (tw`bg-purple-700`)
        case 'flying': return (tw`bg-blue-700`)
        case 'electric': return (tw`bg-yellow-700`)
        case 'fairy': return(tw`bg-pink-700`)
        case 'ground': return(tw`bg-yellow-600`)
        case 'psychic' : return (tw`bg-purple-700`)
        case 'fighting' : return (tw`bg-red-700`)
        case 'rock' : return (tw`bg-gray-700`)
        case 'ghost': return (tw`bg-gray-700`)
        case 'dragon': return (tw`bg-red-700`)        

        default: return (tw`bg-gray-100`)
  }
}
}
display: grid;
grid-gap: 1rem;
grid-template-rows:0.4fr 1fr;
${tw`border-gray-300 rounded-lg text-white border-8 h-full py-5`}
`

const NameSpan=styled.span`
${tw`uppercase  text-2xl font-black`}

`
const XpSpan = styled(NameSpan)`
sub {

${tw` lowercase`}

}

`

const Div = styled.div`
${tw`border-blue-700 border `}

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
        <Card><Img src={`/sprites/${id}.png`} /></Card>
        <Card main>
          <MainCard type={(data.types[0].type.name)}>

          <ImgDiv>
            <Img src={`/sprites/${id}.png`} />
          </ImgDiv>
          <MainCardInfo>
            <Name>
            <NameSpan>{data.name}</NameSpan>
              <XpSpan><sub>xp.</sub>{data.base_experience}</XpSpan>
            </Name>
              
            
          </MainCardInfo>
          </MainCard>
        </Card>
        
        <Card attacks>
          <Attacks type={(data.types[1].type.name)?(data.types[1].type.name): ""}>
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


