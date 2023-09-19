function formatPokemonData(pokemon) {
    if (!pokemon) {
      return null;
    }
  
    const {
      id,
      image,
      name,
      sprites,
      stats,
      height,
      weight,
      types,
      attack,
      defense,
      life,
      speed,
    } = pokemon;
  
    const formattedPokemon = {
      id,
      name,
      // image: sprites?.front_default || image || "default_image_url", 
      image: sprites?.['versions']['generation-v']['black-white']['animated']['front_default'] || sprites?.front_default,
      health: stats?.[0]?.base_stat || life || 0, 
      attack: stats?.[1]?.base_stat || attack || 0, 
      defense: stats?.[2]?.base_stat || defense || 0, 
      speed: stats?.[5]?.base_stat || speed || null,
      height,
      weight,
      type: types?.map((type) => type?.type?.name || null) || [], 
      source: 'API'
    };
  
    return formattedPokemon;
  }
  
  
  function formatPokemonDataDb(pokemon) {
    if (!pokemon) {
      return null;
    }
  
    const {
      id,
      image,
      name,
      sprites,
      stats,
      height,
      weight,
      Types,
      attack,
      defense,
      life,
      speed,
    } = pokemon;
  
    const formattedPokemon = {
      id,
      name,
      image: sprites?.front_default || image || "default_image_url", 
      health: stats?.[0]?.base_stat || life || 0, 
      attack: stats?.[1]?.base_stat || attack || 0, 
      defense: stats?.[2]?.base_stat || defense || 0, 
      speed: stats?.[5]?.base_stat || speed || null,
      height,
      weight,
      type: Types.map((t) => t.name) || [], 
      source: 'DB'
    };
  
    return formattedPokemon;
  }
  
  function formatCard(pokemon) {
    if (!pokemon) {
      return null;
    }
  
    const { id, image, name, sprites, types, attack, stats } = pokemon;
  
    const formattedCard = {
      id,
      // image: sprites?.front_default || image || "default_image_url",
      image: sprites?.['versions']['generation-v']['black-white']['animated']['front_default'] || sprites?.front_default,
      name,
      attack: stats?.[1]?.base_stat || attack || 0,
      type: types?.map((type) => type.type.name) || [],
      source: 'API',
    };
  
    return formattedCard;
  }
  
  function formatCardDb(pokemon) {
    if (!pokemon) {
      return null;
    }
  
    const { id, image, name, sprites, Types, attack } = pokemon;
  
    const formattedCard = {
      id,
      image: sprites?.front_default || image || "default_image_url",
      name,
      attack: attack,
      type: Types?.map((type) => type.name) || [],
      source: 'DB',
    };
  
    return formattedCard;
  }
  
  
  module.exports = { formatPokemonData, formatCard, formatCardDb, formatPokemonDataDb };