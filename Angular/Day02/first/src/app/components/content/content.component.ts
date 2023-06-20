import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  inputValue: string = '';
  age: string = '';
  selectValue: string = '';
  // getInputValue(e: Event) {
  //   let target = e.target as HTMLInputElement;
  //   this.inputValue = target.value;
  // }
}
