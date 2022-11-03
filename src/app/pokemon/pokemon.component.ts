import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pka-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  name = 'Bulbasaur';
  height = 7;
  weight = 69;
  image = './../../assets/images/bulbasaur.png';
}
