import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from '../services/pokemon-data.service';

import { PokemonProfileComponent } from './pokemon-profile.component';

describe('PokemonProfileComponent', () => {
  let component: PokemonProfileComponent;
  let fixture: ComponentFixture<PokemonProfileComponent>;
  let service: PokemonDataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonProfileComponent],
      providers: [
        PokemonDataService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { name: 'bulbasaur' } },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonProfileComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonDataService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
