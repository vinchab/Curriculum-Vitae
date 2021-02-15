import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProfessionalExperience } from '../interface/professional-experience';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalExperienceService {
  private _urlBase: string = 'professional-experience'

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllExperience(){
    return this._afs.collection<IProfessionalExperience>(this._urlBase, ref => ref.orderBy('yearEnd', 'asc'))
  }
}
