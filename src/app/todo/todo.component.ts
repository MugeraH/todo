import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

import { TodoItems } from '../data/todoItems/todo-items';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: TodoItems[];
  constructor(private todoService: TodoService) {}

  addNewTodo(todo: TodoItems) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }
}
