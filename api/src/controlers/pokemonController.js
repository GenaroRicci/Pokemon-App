const axios = require ('axios');
const {Pokemon, Type} = require('../db.js');
const {formatCard,formatCardDb, formatPokemonData, formatPokemonDataDb} = require ('../utils/formatPokemon.js');

// Definición de una función asíncrona llamada getAllPokemons
const getAllPokemons = async () => {

    // Hace una solicitud GET a la API de Pokemon y almacena la respuesta en apiResponse
    const apiResponse = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")).data.results;

    // Utiliza Promise.all() para realizar peticiones a múltiples URLs de la API de Pokemon de manera concurrente
    const apiPokemons = await Promise.all(
        // Mapea sobre los resultados de la API para obtener los detalles de cada Pokemon
        apiResponse.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            // Formatea la información del Pokemon obtenida de la API
            return formatCard(response.data, "API");
        })
    );

    // Realiza una consulta a la base de datos para obtener todos los Pokemon
    const dbPokemons = await Pokemon.findAll({
        include: [
            {
                model: Type,
                attributes: ["type"],
                through: { attributes: [] },
            },
        ],
    });

    // Formatea la información de los Pokemon obtenidos de la base de datos
    const formattedDbPokemons = dbPokemons.map((pokemon) =>
        formatCardDb(pokemon, "Database")
    );

    // Combina los Pokemon de la base de datos y los de la API
    const allPokemons = [...formattedDbPokemons, ...(await Promise.all(apiPokemons))];

    // Retorna la lista de todos los Pokemon
    return allPokemons;
};
// const allPokemons = async() =>{
//     const apiResponse = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")).data.results;
//     const pokemonApi = []
//     for(const pokemon of apiResponse){
//         const response = await axios.get(pokemon.url);
//         const formatedPokemon = formatCard(response.data, 'API');
//         pokemonApi.push(formatedPokemon);
//     }
//     const pokemonDb = await Pokemon.findAll({
//         include: [{
//             model : Type,
//             attributes: ['type'],
//             through : {
//                 attributes:  [],
//             },
//         }]
//     })
//     const formatedPokemonDb = pokemonDb.map((pokemon) => formatCardDb (pokemon, 'Database'));
    
//     const everyPokemon = [...formatedPokemonDb, ...pokemonApi];
//     return everyPokemon;
    
// }

const getPokemonByName = async() =>{

}
const postPokemon = async() =>{

}
const getPokemonById = async() =>{

}


module.exports = {getAllPokemons};

