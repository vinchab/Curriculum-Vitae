import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IAchievement } from '../interface/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private _urlBase: string = 'achievements'

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllAchievements(){
    return this._afs.collection<IAchievement>(this._urlBase, ref => ref.orderBy('date', 'asc'))
  }
}
