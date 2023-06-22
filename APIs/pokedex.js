const fetchPokemon = require('./api')

class Pokedex {
  constructor() {
    this.net = []
  }

  catch(pokemonName) {
    fetchPokemon(pokemonName)
      .then((pokemon) => this.net.push(JSON.stringify(pokemon)));
  }

  all() {
    return this.net
}

}

let pokedex = new Pokedex();

pokedex.catch('pikachu');

console.log(pokedex.all());

