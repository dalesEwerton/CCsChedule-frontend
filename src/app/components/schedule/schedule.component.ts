import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {UserService} from '../../services/user.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  hours = [
    '8:00h - 10:00h',
    '10:00h - 12:00h',
    '12:00h - 14:00h',
    '14:00h - 16:00h',
    '16:00h - 18:00h',
    '18:00h - 20:00h',
    '20:00h - 22:00h'
  ];

  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  newTaskName: string;
  newTaskDescription: string;
  newTaskDay: string;
  newTaskHour: string;

  tasks: any[];

  constructor(private scheduleService: ScheduleService) {
    this.tasks = this.scheduleService.mountTasks();
  }

  ngOnInit() {
  }

  addTask() {

    this.scheduleService.addTask(this.newTaskName, this.newTaskDescription, this.definePosition());
    this.tasks = this.scheduleService.mountTasks();
    alert('OK!');
  }

  definePosition() {
    let pos = 0;

    if (this.newTaskHour === this.hours[0]) {
      pos = 0;

    } else if (this.newTaskHour === this.hours[1]) {
      pos = 5;

    } else if (this.newTaskHour === this.hours[2]) {
      pos = 10;

    } else if (this.newTaskHour === this.hours[3]) {
      pos = 15;

    } else if (this.newTaskHour === this.hours[4]) {
      pos = 20;

    } else if (this.newTaskHour === this.hours[5]) {
      pos = 25;

    } else if (this.newTaskHour === this.hours[6]) {
      pos = 30;
    }

    if (this.newTaskDay === this.days[1]) {
      pos += 1;

    }else if (this.newTaskDay === this.days[2]) {
      pos += 2;

    }else if (this.newTaskDay === this.days[3]) {
      pos += 3;

    }else if (this.newTaskDay === this.days[4]) {
      pos += 4;
    }

    return pos;
  }

}
