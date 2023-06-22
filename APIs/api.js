const fetchPokemon = (name) => {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(types => types.type.name)
      }
      return pokemon
    })
}

module.exports = fetchPokemon

//console.log(fetchPokemon('pikachu'))

/*
const fetchPokemon = (name) => {
  console.log('https://pokeapi.co/api/v2/pokemon/' + name)
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then(function(response) {
      const data = response.json()
      const pokemon = {
        name: data.name
      }
    })
}


const fetchPokemon = async (name) => {
  console.log('https://pokeapi.co/api/v2/pokemon/' + name)
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
  const data = await response.json()
  return data
}
*/