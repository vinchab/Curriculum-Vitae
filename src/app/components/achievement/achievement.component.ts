import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { IAchievement } from 'src/app/shared/interface/achievement';
import { AchievementService } from 'src/app/shared/services/achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  public archievements: IAchievement[] = []  

  private _archievementCollection: AngularFirestoreCollection<IAchievement>
  private _sub: Subscription

  constructor(
    private _achievementService: AchievementService
  ) { }

  async ngOnInit() {
    this._archievementCollection = await this._achievementService.getAllAchievements()

    this._sub = this._archievementCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      this.archievements = data

      this._sub.unsubscribe()
    })
  }

}
