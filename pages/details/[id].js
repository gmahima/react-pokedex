import Layout from '../../components/Layout'
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

export async function getServerSideProps(context) {

  const id = context.params.id
  console.log(id)
  const data = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`).then(res=> res.json())
  return {
    props: {
      data: data
    }
  }
}