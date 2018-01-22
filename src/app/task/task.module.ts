import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './components/task.component';
import { CreateTaskComponent } from './components/createtask.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TaskComponent,CreateTaskComponent]
})
export class TaskModule { }
