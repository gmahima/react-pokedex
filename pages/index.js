import getAllPokemon from '../lib/data'
import Layout from '../components/Layout'
export default function Home(props) {
  console.log(props)
  return (

      <Layout>
        <List items={props.allPokemon.results} renderItem={(p) => (<div>{p.name}</div>)}/>
      </Layout>


  )
}
const List = ({items, renderItem}) => {
  return (items.map(renderItem))
}

export async function getStaticProps () {
  const allPokemon = await getAllPokemon()
  console.log(allPokemon)
  return {props: {allPokemon}};
}

