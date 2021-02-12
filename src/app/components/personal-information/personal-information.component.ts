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
  public personalCollection: AngularFirestoreCollection<IPersonalInformation>
  public sub: Subscription
  public personalInformation: IPersonalInformation[] = []
  public presentation = []
  
  constructor(
    private _personalInfoService: PersonalInformationService
  ) { }

  async ngOnInit() {
    this.personalCollection = await this._personalInfoService.getAllPersonalInformation()

    this.sub = this.personalCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      
      this.personalInformation = data

      for (const iterator of this.personalInformation) {
        this.presentation = iterator.presentation.split(". ")
      }
    })
  }

}
