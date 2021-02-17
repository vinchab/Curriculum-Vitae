import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ITraining } from 'src/app/shared/interface/training';
import { TrainingService } from 'src/app/shared/services/training.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  public title: string = "Diplôme et Certificat"
  public imgUrl: string
  public trainings: ITraining[] = []

  private _trainingCollection: AngularFirestoreCollection<ITraining>
  private _sub: Subscription

  constructor(
    private _trainingService: TrainingService,
    public dialog: MatDialog
  ) { }

  async ngOnInit() {
    this._trainingCollection = await this._trainingService.getAllTrainings()

    this._sub = this._trainingCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      this.trainings = data

      this._sub.unsubscribe()
    })
  }

  openDialog(img: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {imgUrl: img}
    });
  }
}
