import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pka-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  faSearch = faSearch;
  searchValue: string = '';

  @Output()
  searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChanged() {
    this.searchValueChanged.emit(this.searchValue);
    console.log('Search value: ', this.searchValue);
    console.log('Search value changed: ', this.searchValueChanged);
  }
}
