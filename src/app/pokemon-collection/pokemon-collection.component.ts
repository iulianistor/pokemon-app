import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonCollectionData, Result } from '../types';
import { environment } from 'src/environments/environment';
import { PokemonDataService } from '../services/pokemon-data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'pka-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss'],
})
export class PokemonCollectionComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  constructor(private pokemonDataService: PokemonDataService) {}
  pokemonNames: string[] = [];

  page: number = 1;
  totalPokemons: number = 1;
  pageOffset: number = 0;

  searchText: string = 'cha';
  allPokemonNames: string[] = [];
  filteredPokemonNames: string[] = [];

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    if (this.searchText !== '') {
      this.pokemonDataService
        .getPokemonCollectionData(environment.pokemonsPerPage, this.page)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: PokemonCollectionData) => {
          this.totalPokemons = response.count;
          response.results.forEach((result: Result) => {
            this.pokemonNames.push(result.name);
          });
        });
      console.log(this.pokemonNames);

      this.pokemonDataService
        .getAllPokemonNames()
        .pipe(takeUntil(this.destroy$))
        .subscribe((response) => {
          response.forEach((item) => {
            this.allPokemonNames.push(item);
          });
          this.filteredPokemonNames =
            this.pokemonDataService.getAllValidPokemons(
              this.searchText,
              this.allPokemonNames
            );
          console.log('filtered pokemons', this.filteredPokemonNames);
        });
      console.log('tutti pokemoni', this.allPokemonNames);

      console.log('filtered pokemons', this.filteredPokemonNames);
    } else {
      console.log('Search text found');
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
