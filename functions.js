export const renderAllPokemon = async ({main}) => {
  const allPokmeon = await getGen1Pokemon();
    const pokemonNameLIs = allPokmeon.map((singlePokemon) => {
    const uppercaseNames = singlePokemon.name[0].toUpperCase() + singlePokemon.name.slice(1);
    return `<li>${uppercaseNames}</li>`;
  })

  const ol = document.createElement(`ol`);
  ol.innerHTML = pokemonNameLIs.join(``);
  main.replaceChildren(ol);

  const LIs = document.querySelectorAll(`li`);
  
  LIs.forEach((singlePokemonLI) => {
    singlePokemonLI.addEventListener(`click`, async (event) => {
      renderSinglePokemon(event.target.innerText, main);
    });
  });
}



const getGen1Pokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`);
  const responseJSON = await response.json();
  return responseJSON.results;
}

const renderSinglePokemon = async (pokemonName, main) => {
      
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonDetails = await response.json();
    console.log(pokemonDetails);
    const uppercaseNames = pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.slice(1)
    main.innerHTML = `
      <h2>${uppercaseNames}</h2>
      <img src="${pokemonDetails.sprites.front_default}" alt="${pokemonDetails.name}'s picture"/>
      <button>Back</button>
    `;

    const button = document.querySelector(`button`);
    button.addEventListener(`click`, async () => {
      renderAllPokemon({main});
    })
}
