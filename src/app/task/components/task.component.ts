import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TaskService } from '../services/task.services';
import { CreateTaskComponent } from './createtask.component';
import {ITasks} from "../tasks";

@Component({
  selector: 'app-task',
  templateUrl: '../views/task.component.html',
  styleUrls: ['../views/task.component.css'],
  providers: [TaskService],
})
export class TaskComponent implements OnInit {
  _taskArray: ITasks[];

  constructor(private _taskService: TaskService) {
  }
  
  getTasks(): void {
         this._taskService.getTasks()
             .subscribe(
                 resultArray => this._taskArray = resultArray,
                 error => console.log("Error :: " + error)
             )
  }
  ngOnInit() {
     this.getTasks();
  }
}
