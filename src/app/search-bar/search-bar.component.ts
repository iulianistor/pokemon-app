import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'pka-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  faSearch = faSearch;
  enteredSearchValue: string = '';

  constructor(private pokemonDataService: PokemonDataService) {}
  ngOnInit(): void {
    this.onSearchValueChanged();
  }

  onSearchValueChanged() {
    this.pokemonDataService.searchString.emit(this.enteredSearchValue);

    // console.log('Search value: ', this.enteredSearchValue);
  }
}
