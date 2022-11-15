import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss'],
})
export class PokemonCollectionComponent implements OnInit {
  constructor(private pokemonDataService: PokemonDataService) {}
  pokemonNames: any = [];

  ngOnInit(): void {
    this.pokemonDataService
      .getPokemonCollectionData()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.pokemonNames.push(result.name);
        });
      });
    console.log(this.pokemonNames);
  }
}
