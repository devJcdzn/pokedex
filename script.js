const listPokemons = document.querySelector('#list');
const moreButton = document.querySelector('#more');
const scrollTop = document.querySelector('#scroll');

let offset = 0;
const limit = 6;
const maxRecords = 150;

scrollTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

// function redirect() {
//     window.location.href = "./detail.html";
// }


function inner(pokemon) {
    return (
        `
        <div class="pokemon ${pokemon.type}" onclick = {redirect()}>
            <div class="poke-info">
                <h3 class="name">${pokemon.name}</h3>
                <div class="abilities">
                ${pokemon.types.map((type) => `<span class= ${pokemon.type}>${type}</span>`).join('')}

                </div>
                <p class="level">#0${pokemon.number}</p>
            </div>
            <div class="image">
                <img 
                src=${pokemon.image} 
                alt="${pokemon.name}">
            </div>
        </div>
    `
    )
}


function loadPokeItems(offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            listPokemons.innerHTML += pokemons.map(inner).join('');
        })
        .catch((err) => {
            console.log(err);
        });
}

loadPokeItems(offset, limit);

moreButton.addEventListener('click', () => {
    offset += limit;

    const currentRecord = offset + limit;

    if (currentRecord >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokeItems(offset, newLimit);

        moreButton.parentElement.removeChild(moreButton);

        return
    } else {
        loadPokeItems(offset, limit);
    }
});