import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  componentTitle: string = 'Furiture Section';
  flag: boolean = true;
  imgSrc: string = '1.jpg';
  i: number = 0;
  imgsList: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  // imgSrc2: string = 'assets/imgs/2.jpg';
  show() {
    if (this.i == this.imgsList.length - 1) {
      this.i = 0;
    }
    this.i++;
    this.imgSrc = this.imgsList[this.i];
    // this.flag = !this.flag;
  }
}
