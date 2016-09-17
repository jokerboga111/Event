import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo.model';

@Component({
    selector: 'todo-item',
    templateUrl: './app/components/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todo-item/todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() deleted: EventEmitter<Todo>;

    constructor() {
        this.deleted = new EventEmitter<Todo>();
    }

    toggleDone() {
        this.todo.done = !this.todo.done;
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}