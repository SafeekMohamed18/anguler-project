import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  taskForm: FormGroup
 
 

  constructor(private fb:FormBuilder,private router:Router,private taskService:TaskService){
    this.taskForm=this.fb.group({
      id:[''],
      title:["",[Validators.required]],
      discription:[""],
      dueDate:["",[Validators.required]],
      priority:["",[Validators.required]]

    })
  }
  // ngOnInit(): void{
  //   this.taskService.getTaskById(this.taskid).toISOSrting().slice(0.10)
  // }
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
