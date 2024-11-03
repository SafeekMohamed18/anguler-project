import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './componant/task-list/task-list.component';
import { AddTaskComponent } from './componant/add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './componant/edit/edit.component';
import { LoginComponentComponent } from './componant/login-component/login-component.component';
import { RegisterComponentComponent } from './componant/register-component/register-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    FilterPipe,
    EditComponent,
    RegisterComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
