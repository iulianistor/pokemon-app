import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDataService } from '../services/pokemon-data.service';

import { PokemonCollectionComponent } from './pokemon-collection.component';

describe('PokemonCollectionComponent', () => {
  let component: PokemonCollectionComponent;
  let fixture: ComponentFixture<PokemonCollectionComponent>;
  let service: PokemonDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCollectionComponent],
      providers: [PokemonDataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCollectionComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
