import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonCollectionData, PokemonDataType, PokemonType } from '../types';
import { map, catchError } from 'rxjs/operators';
import {
  mapPokemonCollection,
  tranformToPokemonNamesArray,
  transformToPokemonType,
} from './type-transformers';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private apiURL = environment.baseUrl;
  pokeNames: string[] = [];
  public filteredPokeNames: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();
  public searchString: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    this.getAllPokemonNames().subscribe((response) => {
      this.pokeNames = response;
    });

    this.searchString.subscribe((data) => {
      this.filteredPokeNames.emit(
        this.getAllValidPokemons(data, this.pokeNames)
      );
    });
  }

  getPokemonData(name: string): Observable<PokemonType> {
    const data = this.http
      .get<PokemonDataType>(`${this.apiURL}/${name}`)
      .pipe(map(transformToPokemonType), catchError(this.handleError));

    return data;
  }

  getPokemonCollectionData(
    limit: number,
    offset: number
  ): Observable<PokemonCollectionData> {
    const data = this.http
      .get<PokemonCollectionData>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          (offset - 1) * limit
        }`
      )
      .pipe(map(mapPokemonCollection), catchError(this.handleError));

    return data;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getAllPokemonNames(): Observable<string[]> {
    const data = this.http
      .get<PokemonCollectionData>(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154`
      )
      .pipe(map(mapPokemonCollection), catchError(this.handleError))
      .pipe(map(tranformToPokemonNamesArray));
    return data;
  }

  // given a string, this funtion will return an array of names that start with the given string
  getAllValidPokemons(inputString: string, allNames: string[]): string[] {
    let filtered: string[] = [];
    allNames.forEach((item) => {
      if (item.startsWith(inputString)) filtered.push(item);
    });
    return filtered;
  }
}
