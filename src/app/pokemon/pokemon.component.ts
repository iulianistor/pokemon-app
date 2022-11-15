import { Component, OnInit, Input } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import { PokemonType } from './types';

@Component({
  selector: 'pka-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemonName: string = '';

  pokemonData: PokemonType = { name: '', height: 0, weight: 0, src: '' };

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {
    this.onGetPokemon();
  }

  onGetPokemon(): void {
    this.pokemonDataService
      .getPokemonDataUpdated(this.pokemonName)
      .subscribe((data) => {
        (this.pokemonData = data), (error: any) => console.log(error);
      });
  }
}
