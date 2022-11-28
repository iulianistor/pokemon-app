import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { pokemonMockTransformed } from '../pokemonMock';
import { PokemonDataService } from '../services/pokemon-data.service';

import { PokemonProfileComponent } from './pokemon-profile.component';

describe('PokemonProfileComponent', () => {
  let spy: jasmine.Spy;
  let component: PokemonProfileComponent;
  let fixture: ComponentFixture<PokemonProfileComponent>;
  let service: PokemonDataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonProfileComponent],
      providers: [PokemonDataService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonProfileComponent);
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
    expect(component.pokemonProfileData.weight).toBe(69);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
