import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss'],
})
export class PokemonCollectionComponent implements OnInit {
  pokemonCollection: any = [];
  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {
    this.pokemonDataService
      .getPokemonCollectionData()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.pokemonDataService
            .getPokemonDataUpdated(result.name)
            .subscribe((uniqueResponse) => {
              this.pokemonCollection.push(uniqueResponse);
              console.log(this.pokemonCollection);
            });
        });
      });
  }
}
