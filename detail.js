// const deatils = document.querySelector('#content');

// function innerDetail(pokemon) {
//     return (
//         `
//         <div class="info">
//             <div class="main-info">
//                 <div class="title">
//                 <h2 class="name">${pokemon.name}</h2>
//                     <div class="types">
//                     ${pokemon.types.map((type) => `<span class= ${pokemon.type}>${type}</span>`).join('')}
//                     </div>
//                 </div>
//                 <span class="id">${pokemon.order}</span>
//             </div>
//             <div class="image">
//                 <img src=${pokemon.image} alt="">
//             </div>
//         </div>
//         <div class="about">
//             <div class="statics">
//                 <div class="stats">
//                     <span>Status</span>
//                 </div>
//             </div>
//             <div class="about-statics">
//                 <div class="hp">
//                     <span>HP</span>
//                     <div class="progress-bar">
//                         <div class="percentual"></div>
//                     </div>                    
//                 </div>
//                 <div class="hp">
//                     <span>HP</span>
//                     <div class="progress-bar">
//                         <div class="percentual"></div>
//                     </div>
//                 </div>
//                 <div class="hp">
//                     <span>HP</span>
//                     <div class="progress-bar">
//                         <div class="percentual"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//     )
// }

// pokeApi.getPokemons()
//     .then((pokemons = []) => {
//         deatils.innerHTML += pokemons.map(innerDetail).join('');
//     })
//     .catch((err) => {
//         console.log(err);
//     });