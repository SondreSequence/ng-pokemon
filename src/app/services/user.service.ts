import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { storageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: Trainer;

  get user(): Trainer | undefined {
    return this._user;
  }

  set user(user: Trainer | undefined) {
    storageUtil.storageSave<Trainer>(StorageKeys.Trainer, user!);
    this._user = user;
  }

  constructor() {
    this._user = storageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }
}
