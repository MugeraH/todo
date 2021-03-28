import { Component, OnInit, Input } from '@angular/core';
import { TodoItems } from '../data/todoItems/todo-items';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: TodoItems[];
  constructor() {}

  ngOnInit(): void {}

  // addTodo = () => {};
  // return element !== undefined;
  deleteTodo = (id) => {
    this.todos.splice(id, 1);
  };
}
