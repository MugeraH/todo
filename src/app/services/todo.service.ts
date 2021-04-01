import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TodoItems } from '../data/todoItems/todo-items';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  //get todos
  getTodos(): Observable<TodoItems[]> {
    return this.http.get<TodoItems[]>(this.todoUrl);
  }

  //toggle completed
  toggleCompleted(todo: TodoItems): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  //add todo
  addTodo(todo: TodoItems): Observable<TodoItems> {
    return this.http.post<TodoItems>(this.todoUrl, todo, httpOptions);
  }
  //delete todo
  deleteTodo(todo: TodoItems): Observable<TodoItems> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<TodoItems>(url, httpOptions);
  }
}
