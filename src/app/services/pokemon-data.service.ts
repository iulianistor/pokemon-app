import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonDataType, PokemonType } from '../pokemon/types';
import { map } from 'rxjs/operators';

export function transformToPokemonType(
  pokemonData: PokemonDataType
): PokemonType {
  return {
    name: pokemonData.name,
    weight: pokemonData.weight,
    height: pokemonData.height,
    src: pokemonData.sprites.other.dream_world.front_default,
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

  getPokemonCollectionData() {
    return this.http.get<PokemonDataType[]>(
      `https://pokeapi.co/api/v2/pokemon?limit=12`
    );
  }
}
