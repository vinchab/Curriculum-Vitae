import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { ICarousel } from 'src/app/shared/interface/carousel'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public slides: any[] = []
  public isCarousel : boolean = false
  public displayTitle: boolean = false

  private _carouselCollection: AngularFirestoreCollection<ICarousel>
  private _sub: Subscription

  constructor(
    private _carouselService: CarouselService
  ) { }

  async ngOnInit() {
    this._carouselCollection = await this._carouselService.getAllImages()

    this._sub = this._carouselCollection
      .valueChanges({ idField: 'id'})
      .subscribe(data => {
        if (data.length > 0) {
          this.isCarousel = true
        }

        for (const iterator of data) {
          this.slides.push({'image': iterator.url, 'title': iterator.title })
        }

        this._sub.unsubscribe()
    })
  }

}
