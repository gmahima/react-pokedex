const getAllPokemon = async () => {
    const data = await fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
    return data;
}
export default getAllPokemon