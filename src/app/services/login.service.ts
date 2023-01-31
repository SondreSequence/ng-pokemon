import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { apiTrainers } = environment;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Dependency Injection
  constructor(private readonly http: HttpClient) {}

  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username);
  }

  // Check if user exists
  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http
      .get<Trainer[]>(`${apiTrainers}?username=${username}`)
      .pipe(map((response: Trainer[]) => response.pop()));
  }

  //If NOT user, create a user
  private createUser(username: string): Observable<Trainer> {
    const user = {
      username,
      pokemon: [],
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Trainer>(apiTrainers, user, { headers });
  }
}
