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

  /*private createTrainer(username: string, id: number): Observable<Trainer>{
    const user = {
      id,
      username
    }

    const headers = new HttpHeaders({
      "Content-Type": "applicant/json",
      "x-api-key" : "GET API KEY"
    })

  }*/


  //Store Pokemon

}
