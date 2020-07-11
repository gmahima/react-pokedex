import getAllPokemon from '../lib/data'
import Layout from '../components/Layout'
export default function Home({allPokemon}) {
  console.log(allPokemon)
  return (

      <Layout>
        {allPokemon.results.map((p, i) => <PokeCard p={p} key={p.name} id={i+1}/>)}
      </Layout>


  )
}

const PokeCard = ({p, id}) => (

      <div>
        <img src={`/sprites/${id}.png`} />
        <h4>{p.name}</h4>
        {console.log(p)}
      </div>

)




export async function getStaticProps () {
  const allPokemon = await getAllPokemon()
  console.log(allPokemon)
  return {props: {allPokemon}};
}

