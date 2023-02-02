import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { APIResponse } from '../models/apiResponse.model';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';

const {apiPokemon} = environment;
const {apiTrainers} = environment;



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPokemon(): Observable<APIResponse>{
    return this.http.get<APIResponse>(`${apiPokemon}`)}
  
  public getTrainer(username:string): Observable<Trainer|undefined>{
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`)
    .pipe(
      map((response: Trainer[]) =>{
      return response.pop();
    })
  )}



  public test(pokemon: Pokemon){
  
    let previousMons = JSON.parse(sessionStorage.getItem("pokemon-trainers")||"[]");
    console.log(previousMons);

    const allMons = [...previousMons, pokemon]; //IS not iterable if empty make sure u return just pokemon if it's not iterable.
    sessionStorage.setItem("pokemon-trainers", JSON.stringify(allMons));
    fetch(`${"https://magical-olivine-windflower.glitch.me"}/trainers/${1}`, {
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
}
