import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './componant/add-task/add-task.component';
import { TaskListComponent } from './componant/task-list/task-list.component';

const routes: Routes = [
  {path:'', component:TaskListComponent},
  {path: 'add',component:AddTaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
