import { Component, Input, EventEmitter, Output } from '@angular/core'; 
import { Todo } from 'src/app/03_pipes/models/todo.interface';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input()
  Item: Todo

  @Input()
  SelectedTodo:Todo

  @Output()
  todoSelected = new EventEmitter<Todo>();

  onSelectTodo(todo: Todo) {
    this.todoSelected.emit(todo);
  }

};


