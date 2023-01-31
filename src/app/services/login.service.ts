import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Trainer } from '../models/trainer.model';

const {apiTrainers} = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  //Login
public login(): Observable<Trainer>{


}
//Check if user exists
private checkUsername(username: string): Observable<Trainer | undefined>{
  return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`).pipe(
     map((response: Trainer[]) => {
      return response.pop();
     })
  )
}

//IF NOT user - Create a user
private createUser(username: string): Observable<Trainer>{
  //user
  const user = {
    username,
    pokemon: []
  };

  const headers = new HttpHeaders({
    "Content-Type": "application/json",
    "x-api-key": "<api-key>";
  });
  //headers -> API key
  //POST - Create items on the server
}

  //If user || created - Store user
}
