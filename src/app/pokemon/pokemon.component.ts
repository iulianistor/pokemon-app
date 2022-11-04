import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonData: any;

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {
    this.pokemonDataService.getData().subscribe((data) => {
      this.pokemonData = data;
    });
  }

  name = 'Bulbasaur';
  height = 7;
  weight = 69;
  image = './../../assets/images/bulbasaur.png';
}
