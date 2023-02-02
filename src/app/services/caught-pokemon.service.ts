import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  //Get pokemon based on name

  //Patch request with the user id and the pokemon


  constructor(
    private http: HttpClient,
    private readonly apiService: ApiService,
    private readonly userService: UserService
  ) { }


  public addToCaughtPokemon(pokemon: Pokemon | undefined): void{

    if(!this.userService.user){
      throw new Error("addToCaughtPokemon: There is no user")
    }

    const user: Trainer = this.userService.user
    if(pokemon){
      if(this.userService.pokemonIsCaught(pokemon.results[0].name)){
        throw new Error("addToCaughtPokemon: Pokemon is already caught")
      }
    }

    this.http.patch(`${apiTrainers}/${user.id}`, {
      caughPokemon: [...user.Pokemon, pokemon]
    })
  }
}
