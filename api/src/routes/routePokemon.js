const {Router} = require('express');
const {allPokemonsHandler} = require('../handler/pokemonHandler')

const routerPokemon = Router();
routerPokemon.get('/', allPokemonsHandler);
// routerPokemon.get('/id', allPokemonsHandler);

module.exports = routerPokemon;

