import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import { PokemonType } from './pokemon';

@Component({
  selector: 'pka-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonData: PokemonType = { name: '', height: 0, weight: 0, src: '' };

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {
    this.onGetPokemon();
  }

  onGetPokemon(): void {
    this.pokemonDataService.getPokemonData().subscribe((data) => {
      (this.pokemonData = data), (error: any) => console.log(error);
    });
  }
}
