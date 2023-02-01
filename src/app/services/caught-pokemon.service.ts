import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CaughtPokemonService {

  constructor(
    private readonly apiService: ApiService
  ) { }
  //Get pokemon based on Id.

  //Patch request with userId and the guitar
}
