import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _trainer?: Trainer

  public get trainer(): Trainer | undefined{
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined){
    sessionStorage.setItem("Trainer",JSON.stringify(trainer))
    this._trainer = trainer;
  }

  constructor() {
    this._trainer = JSON.parse(sessionStorage.getItem("Trainer")|| "[]");
   }
}
