import Layout from '../../components/Layout'
export default function Details({data}) {
  return (

    <Layout>
      <Container>
      <Card>
        <img src={`/sprites/${id}.png`} />
        <Heading>{data.name}</Heading> 
      </Card>
      <List>
        <h2>Attacks</h2>
        <Para>

          {data.moves.map((m,i) => <Span key={i.toString()}>{m.move.name}</Span>)}
 
        </Para>
        </List>
 
        </Container>
    </Layout>
  )
}

