import { Component, EventEmitter, OnInit } from '@angular/core';
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

  searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private pokemonDataService: PokemonDataService) {}
  ngOnInit(): void {
    this.onSearchValueChanged();
  }

  onSearchValueChanged() {
    this.pokemonDataService.searchString = 'cha';

    this.searchValueChanged.emit(this.enteredSearchValue);

    // this.pokemonDataService.searchString = this.enteredSearchValue;

    //How can I assign this value that is being console logged to the searchString from service?
    //To replace line 22 with the dynamic assignment
    console.log('Search value: ', this.enteredSearchValue);
    // this.pokemonDataService.searchString = this.enteredSearchValue;
  }
}
