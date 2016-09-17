import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ITodo } from './todo.model';

@Injectable()
export class TodoService {
    constructor(private http: Http) {}

    getTodos(): Promise<ITodo[]> {
        return this.http.get('api/todos')
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
    }

    addTodo(todo: ITodo): Promise<ITodo> {
        return this.post(todo);
    }

    deleteTodo(todo: ITodo): Promise<ITodo> {
        return this.delete(todo);
    }

    private post(todo: ITodo): Promise<ITodo> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('api/todos', JSON.stringify(todo), { headers })
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError)
    }

    private delete(todo: ITodo): Promise<ITodo> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `api/todos/${todo.id}`;

        return this.http.delete(url, { headers })
                        .toPromise()
                        .then(res => todo)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}