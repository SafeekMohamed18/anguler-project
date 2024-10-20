import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<any[]>("http://localhost:5001/api/TaskItems")
  }
  addTask(task: Task) {
    return this.http.post("http://localhost:5001/api/TaskItems", task)
  }
  getTaskById(taskid: Task) {
    return this.http.get<Task>("http://localhost:5001/api/TaskItems"+"/"+taskid)
  }
  deleteTask(taskid: Task) {
    return this.http.delete("http://localhost:5001/api/TaskItems" + "/" + taskid)
  }
  // updateTask(taskid:Task){
  //   return this.http.put<>("http://localhost:5001/api/TaskItems"+"/"+taskid)
  // }
}
export interface Task {
  id: number,
  title: string,
  discription: string,
  dueDate: string,
  priyority: string
}