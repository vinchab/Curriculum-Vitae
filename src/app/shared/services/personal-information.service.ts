import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { IPersonalInformation } from '../interface/personal-information';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {
  private _urlBase: string = 'personal-info'
  private _sub: Subscription

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllPersonalInformation(){
    return this._afs.collection<IPersonalInformation>(this._urlBase, ref => ref.orderBy('firstname', 'asc'))
  }
}
