import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../data/todoItems/todo-items';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: TodoItems[] = [
    new TodoItems(1, 'Clean', false, new Date()),
    new TodoItems(2, 'Dance', false, new Date()),
    new TodoItems(3, 'Cook', false, new Date()),
    new TodoItems(4, 'Bathe', false, new Date()),
    new TodoItems(5, 'Slide into that dm', false, new Date()),
    new TodoItems(6, 'Call her', false, new Date()),
  ];
  constructor() {}

  ngOnInit(): void {}

  addNewTodo = (todo) => {
    let todoLength = this.todos.length;
    todo.id = todoLength + 1;
    todo.completeDate = new Date();
    console.log(todo);
    this.todos.push(todo);
  };
}
