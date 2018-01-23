import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import {UserService} from './user.service';

@Injectable()
export class ScheduleService {

  private schedulleID: number;
  private tasks: Task[];
  private api: string;

  constructor() {
    this.schedulleID = 0;
    this.tasks = [];
    this.api = 'https://ccschedule-backend.herokuapp.com/schedule/';
  }

  mountTasks( scheduleId: number ) {

    let taskiess = [];

    $.ajax({
      type: 'GET',
      url: this.api + String.fromCodePoint(this.schedulleID),
      async: false,
      contentType: 'application/json',
      complete: function (data, status) {
        console.log(data.responseText);
        console.log(status);
        taskiess = data.responseText;
      }
    });
  }

}

class Task {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
