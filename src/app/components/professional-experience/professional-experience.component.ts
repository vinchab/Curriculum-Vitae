import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { IPersonalInformation } from 'src/app/shared/interface/personal-information';
import { IProfessionalExperience } from 'src/app/shared/interface/professional-experience';
import { ProfessionalExperienceService } from 'src/app/shared/services/professional-experience.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {
  public experiences: IProfessionalExperience[] = []

  private _experienceCollection: AngularFirestoreCollection<IProfessionalExperience>
  private _sub: Subscription

  constructor(
    private _experienceService: ProfessionalExperienceService
  ) { }

  ngOnInit(): void {
    this._experienceCollection = this._experienceService.getAllExperience()

    this._sub = this._experienceCollection.valueChanges().subscribe(data => {
      this.experiences = data

      this._sub.unsubscribe()
    })
  }

}
