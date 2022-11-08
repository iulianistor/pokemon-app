import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonType } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private apiURL = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getPokemonData(): Observable<PokemonType> {
    return this.http.get<PokemonType>(`${this.apiURL}/1`);
  }
}
