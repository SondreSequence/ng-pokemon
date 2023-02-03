import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { environment } from 'src/enviroments/enviroment';
import { StorageKeys } from '../enums/storage-keys.enum';
import { APIResponse } from '../models/apiResponse.model';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { storageUtil } from '../utils/storage.util';

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


}
