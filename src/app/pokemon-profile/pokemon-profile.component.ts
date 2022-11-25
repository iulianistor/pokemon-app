import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from '../types';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  pokemonName: string = '';

  pokemonProfileData: PokemonType = {
    name: '',
    height: 0,
    weight: 0,
    src: '',
    stats: [
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: '',
          url: '',
        },
      },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: '',
          url: '',
        },
      },
    ],
  };

  constructor(
    private pokemonDataService: PokemonDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onGetPokemonProfile();
  }

  onGetPokemonProfile(): void {
    this.pokemonName = this.route.snapshot.params['name'];

    this.pokemonDataService
      .getPokemonData(this.pokemonName)
      .subscribe((data) => {
        this.pokemonProfileData = data;
      });
  }
}
