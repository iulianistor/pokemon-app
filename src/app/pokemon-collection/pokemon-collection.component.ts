import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.pokemonDataService
      .getPokemonCollectionData()
      .subscribe((response: PokemonCollectionData) => {
        response.results.forEach((result: Result) => {
          this.pokemonNames.push(result.name);
        });
      });
  }
}
