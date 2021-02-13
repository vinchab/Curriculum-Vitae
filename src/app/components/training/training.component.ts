import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ITraining } from 'src/app/shared/interface/training';
import { TrainingService } from 'src/app/shared/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  public trainings: ITraining[] = []

  private _trainingCollection: AngularFirestoreCollection<ITraining>
  private _sub: Subscription

  constructor(
    private _trainingService: TrainingService
  ) { }

  async ngOnInit() {
    this._trainingCollection = await this._trainingService.getAllTrainings()

    this._sub = this._trainingCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      this.trainings = data
    })
  }

}
