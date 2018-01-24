import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {UserService} from '../../services/user.service';

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
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  tasks: any[];

  constructor(private scheduleService: ScheduleService, private userService: UserService) {
    const scheduleId = this.userService.getUserSchedule();
    this.tasks = this.scheduleService.mountTasks(scheduleId);
  }

  ngOnInit() {
    console.log(this.tasks);
  }
}
