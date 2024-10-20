import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
   task :any[]=[]
  searchText: string=""

  constructor(private taskService: TaskService){

  }
  ngOnInit():void{
    this.taskService.getTask().subscribe(d=>{
      this.task=d;
    })
  }
}
