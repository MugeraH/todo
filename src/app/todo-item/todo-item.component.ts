import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItems } from '../data/todoItems/todo-items';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoItems;
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  setClasses = () => {
    let classes = {
      'is-complete': this.todo.completed,
    };
    return classes;
  };

  setComplete = () => {
    this.todo.completed = !this.todo.completed;
  };

  deleteTodo = (id) => {
    this.delete.emit(id);
  };
}
