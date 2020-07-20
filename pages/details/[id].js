import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'

//----------------------X---------STYLED-----------X-----------------
const Container = styled.div`

display:grid;
grid-template-columns: 1fr 1.3fr 1fr 1fr;
grid-template-rows:  7rem 1fr 10rem;
column-gap: 1rem;
row-gap: 1rem;

${tw`sm:h-screen sm:overflow-hidden`}

`
const Card = styled.div`
${tw`m-0 p-0   rounded-lg shadow-xl `}
  grid-row-start: 2;
  grid-row-end: span 1;

  
  ${props => {
    if(props.attacks) {
      return (tw`sm:overflow-hidden sm:relative`)
    }
    if(props.main) {
      return (`grid-column: 2/span 1`)
    }
  }}
  ${
    props => {
      if(props.attacks) {
        return (`grid-column: 3/span 1`)
      }
    }
  }


`
const Heading = styled.h1`
${tw` border-b font-bold text-4xl bg-gray-700 text-gray-100 sm:absolute rounded-t-lg p-3 w-full`}
`
// background-image: linear-gradient(to bottom right, aqua, yellow); ATTACKS!!!!!

const Attacks = styled.div`

  grid-row-start: 2;
  grid-row-end: span 1;
  
  ${tw`overflow-visible sm:overflow-y-auto rounded-lg shadow-xl h-full bg-gray-100`}


}
`
const Info = styled.span`
${tw`text-gray-700   m-1 p-1 rounded-lg text-sm `}

`
const Para = styled.p`
${tw`m-4 flex flex-wrap mt-16 pt-8 items-center`}
`
//ATTACKS!!!!!
//Main
const Img = styled.img`
${tw`w-1/2 h-full`}
`
const ImgDiv = styled.div`
  justify-self: center;
  ${tw`w-1/2 min-h-full bg-gray-500 bg-opacity-25 shadow-inner rounded-lg flex justify-center`}
`
const MainCardInfo= styled.div`
justify-self: center;
  ${tw` bg-gray-500 bg-opacity-25 shadow-inner rounded-lg w-11/12 p-3 `}
`
const Name = styled.div`
${tw`flex justify-between bg-gray-700 text-gray-100 px-2`}
`
const Data=styled.div`
${tw`flex justify-between text-gray-700 border-b border-gray-700 mb-4`}
`
const DataDiv=styled.div`
  ${tw`px-3 mt-5`}
`
const MainCard = styled.div`

display: grid;
grid-gap: 1rem;
grid-template-rows:0.4fr 1fr;
${tw`border-gray-300 rounded-lg text-white border-8 min-h-full py-5 bg-gray-100 `}
`

const NameSpan=styled.span`
${tw`uppercase  text-2xl font-black`}
sub {

  ${tw` lowercase`}
  
  }
  
`
const KeySpan=styled.span`
${tw`uppercase  text-lg font-semibold`}
`
const ValSpan=styled.span`
${tw`  text-lg font-semibold `}
`


const Div = styled.div`
${tw` border border-red-600 min-h-full`}


`
//Main

//----------------------X---------STYLED-----------X-----------------
export default function Details({data, id}) {
  console.log(data.abilities)
  return (

    <Layout>
      <Container>

        <Div/><Div/><Div/><Div/><Div/><Div/><Div/><Div/>
          <Div />
          <Card main>
          <MainCard type={(data.types[0].type.name)}>

           <ImgDiv>
            <Img src={`/sprites/${id}.png`} />
          </ImgDiv> 
          <MainCardInfo>
            <Name>
              <NameSpan>#{data.id}</NameSpan>
              <NameSpan>{data.name}</NameSpan>
              <NameSpan><sub>xp.</sub>{data.base_experience}</NameSpan>
            </Name>
            <DataDiv>

            
            <Data>
              <KeySpan>order</KeySpan>
              <ValSpan>{data.order}</ValSpan>
            </Data>
            <Data>
              <KeySpan>types</KeySpan>
              <ValSpan>{data.types.map(t => "   " + t.type.name)}</ValSpan>
            </Data>
            <Data>
              <KeySpan>abilities</KeySpan>
              <ValSpan>{data.abilities.map(a => "   " + a.ability.name)}</ValSpan>
            </Data>
            <Data>
              <KeySpan>height</KeySpan>
              <ValSpan>{data.height}</ValSpan>
            </Data>
            <Data>
              <KeySpan>weight</KeySpan>
              <ValSpan>{data.weight}</ValSpan>
            </Data>
            </DataDiv>
            
              
            
          </MainCardInfo> 
          </MainCard>
      
        </Card>
        <Card attacks>
          <Attacks >
            <Heading>Attacks</Heading>
            <Para>
              {data.moves.map((m,i) => <Info key={i.toString()}>{m.move.name}</Info>)}   
            </Para>
          </Attacks>
        </Card>
        <Div />
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


