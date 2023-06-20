import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  inputValue: string = '';
  todosList: string[] = [];
  show: boolean = false;
  addToTodo() {
    this.todosList.push(this.inputValue);
    this.inputValue = '';
  }

  remove(i: number) {
    this.todosList = this.todosList.filter((item, index) => index != i);
  }
  toggle() {
    this.show = !this.show;
  }
}
