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

    let allMons = [pokemon];

    if(!(previousMons.length === 0)){
      const filledArray : Pokemon[] = [];
    for(let i = 0; i<previousMons.length; i++){

      filledArray.push(previousMons[i]);
      previousMons[i].captureID = i;

    }
  
    filledArray.push(pokemon);
    pokemon.captureID = previousMons.length;
    allMons = [...filledArray];
  
  }

    sessionStorage.setItem("captured-pokemon", JSON.stringify(allMons));

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

  public removeFromCaughtPokemon(pokemon: Pokemon){
      
    let previousMons = JSON.parse(sessionStorage.getItem("captured-pokemon")||"[]");
    const trainer = JSON.parse(sessionStorage.getItem("pokemon-trainers")||"[]");
    previousMons.splice(pokemon.captureID, 1);
    for(let i= 0; i<previousMons.length; i++)
    {
      previousMons[i].captureID = i;
    }
    sessionStorage.setItem("captured-pokemon", JSON.stringify(previousMons));

    fetch(`${"https://magical-olivine-windflower.glitch.me"}/trainers/${trainer.id}`, {
      method: 'PATCH', // NB: Set method to PATCH
      headers: {
          'X-API-Key': "pullapydde",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          // Provide new Pokémon to add trainer with id 1
          pokemon: previousMons
      })
  })
  }

  }
