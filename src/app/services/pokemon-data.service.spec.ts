import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { PokemonDataService } from './pokemon-data.service';
import { HttpClient } from '@angular/common/http';
import { pokemonMock } from './pokemonMock';

describe('PokemonDataService', () => {
  let service: PokemonDataService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonDataService],
    });
    service = TestBed.inject(PokemonDataService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should call the HTTP GET method for the given API', () => {
    service.getData().subscribe((item) => {
      // This verifies the observable when it resolves and checks if its result matches the mock data
      expect(item).toEqual(pokemonMock);
    });

    // Expect that a single request has been made which matches the given URL, and return its mock.
    // If no such request has been made, or more than one such request has been made,
    // fail with an error message including the given request description, if any.
    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');

    // Check if the request is GET
    expect(req.request.method).toEqual('GET');

    // Check if the correct data was resturned using subscribe callback
    req.flush(pokemonMock);

    // Checks that all requests are fulfilled and there is noting outstanding
    httpMock.verify();

    expect(service).toBeTruthy();
  });
});
