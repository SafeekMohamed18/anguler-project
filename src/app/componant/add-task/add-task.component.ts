import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskForm: FormGroup
 

  constructor(private fb:FormBuilder,private router:Router,private taskService:TaskService){
    this.taskForm=this.fb.group({
      title:["",[Validators.required]],
      discription:[""],
      dueDate:["",[Validators.required]],
      priority:["",[Validators.required]]

    })
  }
  onSubmit(){
    let task = this.taskForm.value;
    this.taskService.addTask(task).subscribe(data=> {
      alert("Task is created successfully");
      this.router.navigate(["/"])
    })
  }
  cancel(){
    this.taskForm.reset()
  }

}
