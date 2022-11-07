import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonType } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  constructor(private http: HttpClient) {}
  getData(): Observable<PokemonType> {
    return this.http.get<PokemonType>('https://pokeapi.co/api/v2/pokemon/1');
  }
}
