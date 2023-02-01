import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { Observable, map, pipe, switchMap, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { storageUtil } from '../utils/storage.util';
import { StorageKeys } from '../enums/storage-keys.enum';

const { apiTrainers, API_KEY } = environment;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Dependency Injection
  constructor(private readonly http: HttpClient) {}

  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username).pipe(
      switchMap((user: Trainer | undefined) => {
        // user does not exist
        if (user === undefined) {
          return this.createUser(username);
        }
        return of(user);
      }),
      tap((user: Trainer) => {
        storageUtil.storageSave<Trainer>(StorageKeys.Trainer, user);
      })
    );
  }

  // Check if user exists
  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http
      .get<Trainer[]>(`${apiTrainers}?username=${username}`)
      .pipe(map((response: Trainer[]) => response.pop()));
  }

  //Create a user
  private createUser(username: string): Observable<Trainer> {
    const user = {
      username,
      pokemon: [],
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    });

    return this.http.post<Trainer>(apiTrainers, user, { headers });
  }
}
