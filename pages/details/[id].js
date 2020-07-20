import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'
import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'

//----------------------X---------STYLED-----------X-----------------
const Top = styled("div")`

${tw` w-full h-10 sm:h-20 flex items-center justify-center  border border-b  border-gray-300 bg-gray-100 `}

`


const Nav= styled.h1`
${tw `
sm:text-xl
font-thin text-gray-700 border mr-auto rounded-lg ml-3 px-2 hover:cursor-pointer hover:bg-gray-300 bg-gray-400
`}
`
const Main=styled.h1`
${tw`sm:text-3xl mr-auto font-black text-gray-700`}
`

const Heading = styled.h1`
${tw` border-b font-bold text-4xl bg-gray-700 text-gray-100 rounded-t-lg p-3 w-full`}
`
// background-image: linear-gradient(to bottom right, aqua, yellow); ATTACKS!!!!!

const Attacks = styled.div`
  
  ${tw`mt-5 sm:ml-10 rounded-lg shadow-lg sm:w-1/3 bg-gray-100 self-center w-4/5`}


}
`
const Content = styled.div`
${tw`flex items-center justify-center py-10 sm:flex-row flex-col sm:m-0 sm:px-0  items-center justify-center`}
`
const Info = styled.span`
${tw`text-gray-700   m-1 p-1 rounded-lg text-sm hover:shadow-sm  border border-gray-300 cursor-default`}

`
const Para = styled.p`
${tw`m-4 flex flex-wrap items-center`}
`
//ATTACKS!!!!!
//Main
const Img = styled.img`
${tw`w-full h-full`}
`
const ImgDiv = styled.div`

  ${tw`w-3/5 sm:w-2/5 h-full bg-gray-500 bg-opacity-25 shadow-inner rounded-lg flex justify-center mb-3`}
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

${tw`border-gray-300 rounded-lg text-white border-8  py-5 bg-gray-100 sm:w-1/3 flex flex-col justify-center items-center shadow-2xl`}
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


//Main

//----------------------X---------STYLED-----------X-----------------
export default function Details({data, id}) {
  console.log(data.abilities)
  return (

    <Layout>
      <Top><Link href="/"><Nav>PokeDex</Nav></Link><Main>PokéCard</Main></Top>
      <Content>
        
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

          <Attacks >
            <Heading>Attacks</Heading>
            <Para>
              {data.moves.map((m,i) => <Info key={i.toString()}>{m.move.name}</Info>)}   
            </Para>
          </Attacks>
        </Content >
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


