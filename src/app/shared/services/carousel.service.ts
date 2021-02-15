import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ICarousel } from '../interface/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private _urlBase: string = 'carousel-images'
  private _sub: Subscription

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllImages(){
    return this._afs.collection<ICarousel>(this._urlBase, ref => ref.orderBy('index', 'desc'))
  }
}
