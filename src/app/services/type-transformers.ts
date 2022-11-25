import { PokemonDataType, PokemonType, PokemonCollectionData } from '../types';

export function mapPokemonCollection(
  pokemonCollectionData: PokemonCollectionData
): PokemonCollectionData {
  return {
    count: pokemonCollectionData.count,
    next: pokemonCollectionData.next,
    previous: pokemonCollectionData.previous,
    results: pokemonCollectionData.results,
  };
}

export function transformToPokemonProfileType(
  pokemonData: PokemonDataType
): PokemonType {
  return {
    name: pokemonData.name,
    weight: pokemonData.weight,
    height: pokemonData.height,
    src: pokemonData.sprites.other['official-artwork'].front_default,
    stats: pokemonData.stats,
    types: pokemonData.types,
  };
}
