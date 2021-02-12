import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { IPersonalInformation } from 'src/app/shared/interface/personal-information';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  public personalInformation: IPersonalInformation[] = []
  public presentation = []

  private _personalCollection: AngularFirestoreCollection<IPersonalInformation>
  private _sub: Subscription
  
  constructor(
    private _personalInfoService: PersonalInformationService
  ) { }

  async ngOnInit() {
    this._personalCollection = await this._personalInfoService.getAllPersonalInformation()

    this._sub = this._personalCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      
      this.personalInformation = data

      for (const iterator of this.personalInformation) {
        this.presentation = iterator.presentation.split(".")
      }
    })
  }

}
