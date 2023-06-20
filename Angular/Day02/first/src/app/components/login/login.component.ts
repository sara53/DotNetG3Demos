import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() childData: string = '';
  @Input() productList: { id: number; pName: string }[] = [];
}
