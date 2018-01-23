import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';

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

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
  }
}
