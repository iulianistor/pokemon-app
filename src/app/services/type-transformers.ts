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

export function transformToPokemonType(
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

export function tranformToPokemonNamesArray(
  pokemons: PokemonCollectionData
): string[] {
  let names: string[] = [];
  pokemons.results.forEach((result) => {
    names.push(result.name);
  });
  return names;
}
