import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  public img: string

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public imgUrl: string
  ) {

  }

  ngOnInit(): void {
    console.log('Open dialog ==> ', this.imgUrl)
    console.log(typeof this.imgUrl)

    for (const iterator of Object.entries(this.imgUrl)) {
      console.log(iterator[1]);
      this.img = iterator[1]
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
