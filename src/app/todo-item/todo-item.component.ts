import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItems } from '../data/todoItems/todo-items';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoItems;
  @Output() delete = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses = () => {
    let classes = {
      'is-complete': this.todo.isCompleted,
    };
    return classes;
  };

  setComplete = () => {
    //toggle in ui
    this.todo.isCompleted = !this.todo.isCompleted;
    //toggle in ui
    this.todoService.toggleCompleted(this.todo).subscribe(todo => {
      console.log(todo);
      
    })
  };

  deleteTodo = (id) => {
    this.delete.emit(id);
  };
}
