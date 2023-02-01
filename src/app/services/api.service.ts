import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { StorageKeys } from '../enum/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

const {apiPokemon} = environment;
const {apiTrainers} = environment;



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPokemon(): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`${apiPokemon}`)}
  
  public getTrainer(username:string): Observable<Trainer|undefined>{
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`)
    .pipe(
      map((response: Trainer[]) =>{
      return response.pop();
    })
  )}

  public login(username: string): Observable<Trainer>{
    return this.getTrainer(username)
      .pipe(
        switchMap((trainer: Trainer | undefined) =>{
          if(trainer === undefined){ // Trainer does not exist
            return this.createTrainer(username)
          }
          return of(trainer);
        }),
        tap((trainer: Trainer) =>{
          StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer);
        })
      )
  }

  private createTrainer(username: string): Observable<Trainer>{
    const trainer = {
      username,
      pokemon: []
    }

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "pullapydde"
    });
    
    return this.http.post<Trainer>(apiTrainers, trainer,{
      headers
    })

  }


  //Store Pokemon

}
