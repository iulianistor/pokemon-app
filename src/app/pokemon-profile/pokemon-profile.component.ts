import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  pokemonName: string = '';

  pokemonProfileData: any = {
    name: '',
    height: 0,
    weight: 0,
    src: '',
    stats: { basestat: 0, statName: '' },
    types: { slot: 0, typeName: '' },
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
      .getPokemonProfileData(this.pokemonName)
      .subscribe((data) => {
        this.pokemonProfileData = data;
      });
  }
}
