import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { PokemonComponent } from './pokemon.component';
import { HttpClient } from '@angular/common/http';
// import { pokemonMock } from '../services/pokemonMock';
import { PokemonDataService } from '../services/pokemon-data.service';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let httpMock: HttpTestingController;
  let HttpClient: HttpClient;
  let service = PokemonDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    // service = TestBed.inject(PokemonDataService);
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // let pokeComponent = new PokemonComponent();
    // expect(pokeComponent).toBeTruthy();
  });
});
