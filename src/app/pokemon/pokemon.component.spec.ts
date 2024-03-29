import {
  pokemonMockTransformed,
  pokemonMockTransformedSecond,
} from '../pokemonMock';
import { PokemonDataService } from './../services/pokemon-data.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonComponent', () => {
  let spy: jasmine.Spy;
  let service: PokemonDataService;
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      providers: [PokemonDataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(PokemonDataService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pokemon from the service directly', () => {
    spy = spyOn(service, 'getPokemonData').and.returnValue(
      of(pokemonMockTransformed)
    );
    fixture.detectChanges();
    expect(component.pokemonData.height).toBe(7);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should set second pokemon from the service directly', () => {
    spy = spyOn(service, 'getPokemonData').and.returnValue(
      of(pokemonMockTransformedSecond)
    );
    fixture.detectChanges();
    expect(component.pokemonData.height).toBe(8);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
