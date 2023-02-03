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


  public addToCaughtPokemon(pokemon: Pokemon){

    const previousMons = JSON.parse(sessionStorage.getItem("captured-pokemon")||"[]");
    const trainer = JSON.parse(sessionStorage.getItem("pokemon-trainers")||"[]");

    const allMons = previousMons.length === 0 ? [pokemon] : [...previousMons, pokemon];
    sessionStorage.setItem("captured-pokemon", JSON.stringify(allMons));
    console.log(previousMons);

    fetch(`${"https://magical-olivine-windflower.glitch.me"}/trainers/${trainer.id}`, {
      method: 'PATCH', // NB: Set method to PATCH
      headers: {
          'X-API-Key': "pullapydde",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          // Provide new Pokémon to add trainer with id 1
          pokemon: allMons
      })
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
