
import Layout from '../components/Layout'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
grid-gap: 30px;
padding: 0 30px;
justify-content: center;
`

const Card = styled.div`
  display: grid;
  box-shadow: 3px 3px 20px #DDD;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  justify-items: center;

`


export default function Home({allPokemon}) {
console.log(allPokemon)
  return (

      <Layout>
        <Container>
          {allPokemon.results.map((p, i) => <PokeCard p={p} key={p.name} id={i+1}/>)}
        </Container>
        
      </Layout>


  )
}

const PokeCard = ({p, id}) => (

      <Card>
        <img src={`/sprites/${id}.png`} />
        <h4>{p.name}</h4>

      </Card>

)

export const getServerSideProps = async function () {
  const data =await fetch('http://pokeapi.co/api/v2/pokemon?limit=3').then(res=>res.json())
  return {
   props: { allPokemon: data}
  }
}



