const {getAllPokemons} = require ('../controlers/pokemonController');


const allPokemonsHandler = async (req, res) =>{
try {
    let pokemon = await getAllPokemons();
    res.status(200).send(pokemon);
} catch (error) {
    res.status(400).json({
        error: error.message,
    });
}
};
module.exports = {allPokemonsHandler};
