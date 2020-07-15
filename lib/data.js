const getAllPokemon = async () => {
    let promises = []
    for(let i=1; i<=11; i++) {
        promises.push(fetch(`http://pokeapi.co/api/v2/pokemon/${i}`).then(res=>res.json()))
    }

    const data = await Promise.all(promises).then(values => values)
    return data;
}

const getIds = () => {
    let s = {}
    let list = []
   for(let i=1; i<=11; i++) {
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


export {getAllPokemon, getIds}