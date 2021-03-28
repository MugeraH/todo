import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoItems } from '../data/todoItems/todo-items';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  newTodo = new TodoItems(0, '', false, new Date());
  @Output() addTodo = new EventEmitter<TodoItems>();

  submitTodo(todoForm: NgForm) {
    this.addTodo.emit(this.newTodo);
    this.newTodo = new TodoItems(0, '', false, new Date());
  }

  constructor() {}
  ngOnInit(): void {}
}
