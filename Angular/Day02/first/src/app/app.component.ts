import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentData: string = 'Data From Parent Component';
  products: { id: number; pName: string }[] = [
    { id: 1, pName: 'sumsung' },
    { id: 2, pName: 'laptop' },
  ];
}
