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


  public addToCaughtPokemon (caughtPokemon: Pokemon | undefined) {

    if(!this.userService.user){
      throw new Error("addToCaughtPokemon: There is no user")
    }

    const user: Trainer = JSON.parse(sessionStorage.getItem('pokemon-trainers')|| "[]")
    if(caughtPokemon){
      if(this.userService.pokemonIsCaught(caughtPokemon.name)){
        throw new Error("addToCaughtPokemon: Pokemon is already caught")
      }
    }

        
const apiURL = 'https://magical-olivine-windflower.glitch.me'
const apiKey = 'pullapydde'
fetch(`${apiURL}/trainers/${'id'}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
            'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new Pokémon to add trainer with id 1
            pokemon: [user.pokemon, caughtPokemon]
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update trainer')
      }
      return response.json()
    })
    .then(updatedTrainer => {
      console.log(updatedTrainer)
      sessionStorage.setItem("pokemon-trainers",updatedTrainer)
      
    })
    .catch(error => {
    })
  }


    /*
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key' : API_KEY
    })
    console.log("Trying to catch " + pokemon?.name);
    return this.http.patch(`${apiTrainers}/${user.id}`, 
    {caughtPokemon: [...user.pokemon, pokemon]} , {headers})
    */
  }
