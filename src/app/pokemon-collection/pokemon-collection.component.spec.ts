import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDataService } from '../services/pokemon-data.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { PokemonCollectionComponent } from './pokemon-collection.component';
import { pokemonCollectionMock } from '../pokemonMock';
import { of } from 'rxjs';

describe('PokemonCollectionComponent', () => {
  let spy: jasmine.Spy;
  let component: PokemonCollectionComponent;
  let fixture: ComponentFixture<PokemonCollectionComponent>;
  let service: PokemonDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCollectionComponent],
      providers: [PokemonDataService],
      imports: [HttpClientTestingModule, NgxPaginationModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCollectionComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonDataService);
  });

  afterEach(() => {
    spy = null as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send pokemon name from the servive directly', () => {
    spy = spyOn(service, 'getPokemonCollectionData').and.returnValue(
      of(pokemonCollectionMock)
    );
    fixture.detectChanges();
    expect(component.pokemonNames[0]).toBe('bulbasaur');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render pagination menu', () => {
    component.getPokemons();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector);
  });
});
