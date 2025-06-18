import * as Functions from './functions.js'

const main = document.querySelector(`main`);


const renderAllPokemonParams = {
  getAllPokemon: Functions.getAllPokemon,
  main: main
}

Functions.renderAllPokemon(renderAllPokemonParams);