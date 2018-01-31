import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import {UserService} from './user.service';

@Injectable()
export class ScheduleService {

  private schedulleID: number;
  private tasks: Task[];
  private api: string;

  constructor(private userService: UserService) {
    this.schedulleID = this.userService.getUserSchedule();
    this.tasks = [];
    this.api = 'https://ccschedule-backend.herokuapp.com/schedule/';
  }

  mountTasks() {

    let taskiess = [];

    $.ajax({
      type: 'GET',
      url: this.api + this.schedulleID.toString(),
      async: false,
      contentType: 'application/json',
      complete: function (data) {
        taskiess = data.responseJSON;
      }
    });

    return taskiess;
  }


  addTask(name: string, description: string, position: number) {

    const newTask = new Task(name, description, this.schedulleID);

    let response: any;
    let logginStatus: string;

    $.ajax({
      type: 'POST',
      url: this.api + 'task/' + position.toString(),
      async: false,
      data: JSON.stringify(newTask),
      contentType: 'application/json',
      complete: function (data, status) {
        response = data.responseText;
        logginStatus = status;
      }
    });
  }

}

class Task {
  taskName: string;
  taskDescription: string;
  scheduleId: number;

  constructor(name: string, description: string, scheduleId: number) {
    this.taskName = name;
    this.taskDescription = description;
    this.scheduleId = scheduleId;
  }
}
