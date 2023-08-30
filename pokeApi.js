
const pokeApi = {}

function classPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.order;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);

    pokemon.types = types;
    pokemon.type = types[0];
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokeDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(res => res.json())
        .then(classPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 15) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((res) => res.json())
        .then((response) => response.results)
        .then((res) => res.map(pokeApi.getPokeDetail))
        .then((detail) => Promise.all(detail))
        .then((pokeDetail) => pokeDetail)
        .catch(err => console.log(err))
}

