import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  formData:Todo = new Todo();
  public list: Todo[] = [];

  constructor() { 
    this.resetForm();
  }

  resetForm() {
    this.formData = new Todo();  
    this.formData.taskId = this.getRandomInt(0, 999999);
    this.formData.category = 'personal';
  }

  changeStatus(id: number) {
    for (let index = 0; index < this.list.length; index++) {
      if(this.list[index].taskId == id) {
        this.list[index].status = (this.list[index].status == 0? 1: 0);
      }
    }
  }

  // create
  createTodo() {
    this.list.push(this.formData);
  }

  // read
  getTodo(id: number): any {
    let todo: any;
    this.list.forEach(item => {
      if(item.taskId == id)
        todo = item;
    });

    return todo;
  }

  // update
  updateTodo() {
    for (let index = 0; index < this.list.length; index++) {
      if(this.list[index].taskId == this.formData.taskId) {
        this.list[index] = this.formData;
      }
    }
  }

  // delete
  deleteTodo(id: number) {
    for (let index = 0; index < this.list.length; index++) {
      if(this.list[index].taskId == id) {
        this.list.splice(index, 1);
      }
    }
  }

  getCount(category: string) {
    let tasks: any = [];
    for (let ind = 0; ind < this.list.length; ind++) {
      if(this.list[ind].category == category) {
        tasks.push(this.list[ind])
      }
    }

    return new Set(tasks).size;
  }

  getCategoryProgressCount(category: string) {
    if(this.getCount(category) > 0)
    return this.getCount(category)/this.list.length;
    else 
    return 0
  }

  getRandomInt(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
