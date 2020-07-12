import Layout from '../../components/Layout'
import {getIds, getPokemonDetails} from '../../lib/data'

export default function Details({data}) {
  return (
    <Layout>
      <div>
        <ul>
          {data.moves.map((m,i) => <li key={i.toString()}>{m.move.name}</li>)}
        </ul>
      </div>

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
  console.log(data)
  return {
    props: {
      data: data.details
    }
  }
}