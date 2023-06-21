import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges, OnDestroy {
  @Input() dataFromContent: string = '';
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  componentTitle: string = 'Login Component';

  @Input() flag: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.flag == true) {
      this.componentTitle = 'Login Component';
    } else {
      this.componentTitle = 'Register Component';
    }
  }
}
