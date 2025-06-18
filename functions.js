export const getAllPokemon = async (main) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const responseJSON = await response.json();
  const allPokmeon = responseJSON.results;

  const pokemonNameLIs = allPokmeon.map((singlePokemon) => {
    const uppercaseNames = singlePokemon.name[0].toUpperCase() + singlePokemon.name.slice(1);
    return `<li>${uppercaseNames}</li>`;
  })

  const ol = document.createElement(`ol`);
  ol.innerHTML = pokemonNameLIs.join(``);
  main.append(ol);
}



export const renderAllPokemon = async ({getAllPokemon, main}) => {
  await getAllPokemon(main);
  const LIs = document.querySelectorAll(`li`);
  
  LIs.forEach((singlePokemonLI) => {
    singlePokemonLI.addEventListener(`click`, async (event) => {
      const pokemonName = event.target.innerText;
      
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonDetails = await response.json();
      console.log(pokemonDetails);
      const uppercaseNames = pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.slice(1)
      main.innerHTML = `<h2>${uppercaseNames}`;
    })
  })
}

// import * as Functions from './functions.js'