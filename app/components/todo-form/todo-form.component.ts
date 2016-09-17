import { Component } from '@angular/core';

import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css']
})
export class TodoFormComponent {
    constructor(private todoService: TodoService) {}

    add(title: string) {
        if (title) {
            let todo = new Todo(title);
            this.todoService.addTodo(todo).then(todo => console.log(todo));
        }
    }
}