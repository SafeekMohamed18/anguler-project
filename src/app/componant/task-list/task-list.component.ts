import { Component } from '@angular/core';
import { Task, TaskService } from '../../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  task: any[] = []
  searchText: string = ""

  constructor(private taskService: TaskService, private router: Router) {

  }
  ngOnInit(): void {
    this.loadTask();
  }

  deleteTask(taskid: Task) {
    console.log(taskid)
    this.taskService.deleteTask(taskid).subscribe(data => {
      alert("task is deleted successfully");
      this.loadTask();
    })
  }
  loadTask() {
    this.taskService.getTask().subscribe(data => {
      this.task = data;
    })
  }
}
