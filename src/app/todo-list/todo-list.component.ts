import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItems } from '../data/todoItems/todo-items';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: TodoItems[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  //todo make this work

  selectUndone() {
    let undoneData = this.todos.filter((data) => {
      return data.isCompleted !== true;
    });

    console.log(undoneData);
    this.todos = undoneData;
  }
  selectCompleted() {
    let doneData = this.todos.filter((data) => {
      return data.isCompleted == true;
    });
    console.log(doneData);
    this.todos = doneData;
  }

  selectAll() {
    let allData;
    this.todos = allData;

    console.log(allData);
  }
  deleteTodo = (todo: TodoItems, id: any) => {
    this.todos.splice(id, 1);
    this.todoService.deleteTodo(todo).subscribe();
  };
}
