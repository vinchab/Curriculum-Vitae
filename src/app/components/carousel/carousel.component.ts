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
  public slides = []

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
        for (const iterator of data) {
          let image = {'image': iterator.url, 'title': iterator.title }
          
          this.slides.push(image)
        }
    })
  }

}
