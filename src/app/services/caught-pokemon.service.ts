import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationInitStatus, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment.prod';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { ApiService } from './api.service';
import { UserService } from './user.service';


const {API_KEY, apiTrainers} = enviroment;
@Injectable({
  providedIn: 'root'
})
export class CaughtPokemonService {

  constructor(
    private http: HttpClient,
    private readonly apiService: ApiService,
    private readonly userService: UserService
  ) { }


  public addToCaughtPokemon (pokemon: Pokemon | undefined): Observable<any>{

    if(!this.userService.user){
      throw new Error("addToCaughtPokemon: There is no user")
    }

    const user: Trainer = this.userService.user
    if(pokemon){
      if(this.userService.pokemonIsCaught(pokemon.results[0].name)){
        throw new Error("addToCaughtPokemon: Pokemon is already caught")
      }
    }
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key' : API_KEY
    })
    return this.http.patch(`${apiTrainers}/${user.id}`, {
      caughPokemon: [...user.Pokemon, pokemon]
    }, {
      headers
    })
  }
}
