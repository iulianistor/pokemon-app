import { Component, OnInit } from '@angular/core';
import { PokemonCollectionData, Result } from '../types';
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

  //Could the limit (12) be an environment variable? We're using the number of items to be displayed on a page in several places
  getPokemons() {
    this.pokemonDataService
      .getPokemonCollectionData(12, this.page)
      .subscribe((response: PokemonCollectionData) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: Result) => {
          this.pokemonNames.push(result.name);
        });
      });
    console.log('page: ', this.page);
    console.log('offset:', this.pageOffset);
  }
}
