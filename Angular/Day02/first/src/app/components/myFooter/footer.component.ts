import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  studentsNames: string[] = ['mona', 'ali'];
  trackNames: string[] = ['PD', 'OS', 'Front'];
  show: boolean = true;
  color: string = 'blue';

  getInputValue(x: any) {
    console.log(x);
  }
}
