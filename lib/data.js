const getAllPokemon = async () => {
    const data = await fetch('http://pokeapi.co/api/v2/pokemon?limit=3').then(res=>res.json())
    return data;
}

const getIds = () => {
    let s = {}
    let list = []
   for(let i=1; i<=3; i++) {
        s = {
            params: {
                id: i.toString()
            }
        }
        list.push(s)
    }
    return list;
    
}

const getPokemonDetails = async (id) => {
    const details = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`).then(res=> res.json())
    return {id, details}

}


export {getAllPokemon, getIds, getPokemonDetails}