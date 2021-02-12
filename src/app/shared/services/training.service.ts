import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ITraining } from '../interface/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private _urlBase: string = 'training'
  private _sub: Subscription

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllTrainings(){
    return this._afs.collection<ITraining>(this._urlBase, ref => ref.orderBy('dateStart', 'asc'))
  }
}
