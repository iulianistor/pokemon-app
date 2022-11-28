import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonCollectionData, Result } from '../pokemon/types';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss'],
})
export class PokemonCollectionComponent implements OnInit {
  constructor(private pokemonDataService: PokemonDataService) {}
  pokemonNames: string[] = [];

  page: number = 1;
  totalPokemons: number = 1;
  pageOffset: number = 0;

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonDataService
      .getPokemonCollectionData(environment.pokemonsPerPage, this.page)
      .subscribe((response: PokemonCollectionData) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: Result) => {
          this.pokemonNames.push(result.name);
        });
      });
  }
}
