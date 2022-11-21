import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PokemonDataService } from '../services/pokemon-data.service';
import { PokemonType } from './types';

@Component({
  selector: 'pka-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  @Input() pokemonName: string = '';
  destroy$ = new Subject<void>();

  pokemonData: PokemonType = { name: '', height: 0, weight: 0, src: '' };

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {
    this.onGetPokemon();
  }

  onGetPokemon(): void {
    this.pokemonDataService
      .getPokemonData(this.pokemonName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        (this.pokemonData = data), (error: any) => console.log(error);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
