import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PokemonCollectionData,
  PokemonDataType,
  PokemonType,
} from '../pokemon/types';
import { map } from 'rxjs/operators';

export function transformToPokemonType(
  pokemonData: PokemonDataType
): PokemonType {
  return {
    name: pokemonData.name,
    weight: pokemonData.weight,
    height: pokemonData.height,
    src: pokemonData.sprites.other['official-artwork'].front_default,
  };
}

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
@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private apiURL = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPokemonData(name: string): Observable<PokemonType> {
    const data = this.http
      .get<PokemonDataType>(`${this.apiURL}/${name}`)
      .pipe(map(transformToPokemonType));

    return data;
  }

  getPokemonCollectionData(): Observable<PokemonCollectionData> {
    const data = this.http
      .get<PokemonCollectionData>(`https://pokeapi.co/api/v2/pokemon?limit=12`)
      .pipe(map(mapPokemonCollection));

    return data;
  }
}
