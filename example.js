class PokeApi {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  async getPokemonsDetailsWithConvertedStats() {
    try {
      const pokemons = await this.getPokemons();

      const pokemonDetails = await this.getPokemonDetails(pokemons);

      return pokemonDetails.map((pokemon) => ({
        ...pokemon,
        stats: this.statsConverter(pokemon.stats),
      }));
    } catch (error) {
      console.log(error.message);
    }
  }

  async getPokemons() {
    const { results } = await fetch(this.BASE_URL).then((response) =>
      response.json()
    );

    return results;
  }

  async getPokemonDetails(pokemons) {
    const pokemonDetailsCalls = pokemons.map(({ url }) =>
      fetch(url).then((response) => response.json())
    );

    return Promise.all(pokemonDetailsCalls);
  }

  statsConverter(pokemonDetailedList) {
    return pokemonDetailedList.reduce((statMap, { base_stat, stat }) => {
      statMap[stat.name] = base_stat;

      return statMap;
    }, {});
  }
}

const api = new PokeApi();

api.getPokemonsDetailsWithConvertedStats().then((data) => console.log(data));
