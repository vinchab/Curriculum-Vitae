import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Curriculum-Vitae';
  public slides = [
    /* {'image': 'https://firebasestorage.googleapis.com/v0/b/my-cv-d02c9.appspot.com/o/slide-1.jpg?alt=media&token=60ca2378-0fa2-4236-a88c-1535526f2345'},
    {'image': 'https://firebasestorage.googleapis.com/v0/b/my-cv-d02c9.appspot.com/o/slide-2.jpg?alt=media&token=6d1448b9-d3e5-42ce-9362-4d5990c4f55c'}, */
    {'image': '../assets/slide-1.jpg'},
    {'image': '../assets/slide-2.jpg'}
    
  ]
}
