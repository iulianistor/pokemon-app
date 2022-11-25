import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from '../types';
import { PokemonDataService } from '../services/pokemon-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pka-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  pokemonName: string = '';

  pokemonProfileData!: Observable<PokemonType>;

  constructor(
    private pokemonDataService: PokemonDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onGetPokemonProfile();
  }

  onGetPokemonProfile(): void {
    // console.log('Route:', this.route);
    this.pokemonName = this.route.snapshot.params['name'];
    this.pokemonProfileData = this.pokemonDataService.getPokemonData(
      this.pokemonName
    );
  }
}
