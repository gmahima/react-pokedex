
import styled from 'styled-components'


const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
grid-gap: 30px;
padding: 0 30px;
justify-content: center;
`
const Heading = styled.h1`
font-size: 3em;
`

const Card = styled.div`
  display: grid;
  box-shadow: 3px 3px 20px #DDD;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  justify-items: center;
  &:hover{
    border-color: teal;
    color: teal;
  }
`
const A = styled.a`
color: black;
text-decoration: none;
`



const PokeCard = ({p, id}) => (

      <Card>
        <img src={`/sprites/${id}.png`} />
        <h4>{p.name}</h4>

      </Card>

)





