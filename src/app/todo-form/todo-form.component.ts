import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoItems } from '../data/todoItems/todo-items';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  title: string;
  @Output() addTodo = new EventEmitter<any>();

  submitTodo() {
    
    const todo = {
      title: this.title,
      isComplete: false,
      createdDate: new Date(),
    };
    this.addTodo.emit(todo);
  }

  closeResult = '';

  constructor() {}
  ngOnInit(): void {}
}
