import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class UserService {

  private loggedIn: boolean;
  private user: UserVO;
  private api: string;

  constructor() {
    this.loggedIn = false;
    this.user = null;
    this.api = 'https://ccschedule-backend.herokuapp.com/user/';
  }

  addUser(username: string, name: string, password: string, scheduleId: number, job: string, aboutMe: string) {

    const newUser = new User(username, name, password, 0, job, aboutMe);
    let response: any;
    let createStatus: string;

    $.ajax({
      type: 'POST',
      url: this.api,
      async: false,
      data: JSON.stringify(newUser),
      contentType: 'application/json',
      complete: function (data, status) {
        response = data.responseText;
        createStatus = status;
      }
    });

    if (createStatus === 'success') {

      alert('Created!\nSign in to access our account');
      return true;
    }else {
      alert(response);
      return false;
    }
  }

  authUser(username: string, password: string) {
    const checkUser = {
      username: username,
      password: password
    };

    let response: any;
    let logginStatus: string;

    $.ajax({
      type: 'POST',
      url: this.api + 'login',
      async: false,
      data: JSON.stringify(checkUser),
      contentType: 'application/json',
      complete: function (data, status) {
        response = data.responseText;
        logginStatus = status;
      }
    });

    if (logginStatus === 'success') {
      this.loggedIn = true;

      response = JSON.parse(response);
      this.user = new UserVO(
        response.name,
        response.job,
        response.about,
        response.scheduleId
      );

      return true;
    }else {

      alert(response);
      return false;
    }

  }

  getUserLoggedIn() {
    return this.loggedIn;
  }

  setUserLoggedIn() {
    this.loggedIn = !this.loggedIn;
  }

  getNameLogged() {
    return this.user.name;
  }

  getJobLogged() {
    return this.user.job;
  }

  getAboutLogged() {
    return this.user.about;
  }
}

class User {

  username: string;
  name: string;
  password: string;
  scheduleId: number;
  job: string;
  about: string;

  constructor(us: string, nm: string, ps: string, sId: number, jb: string, aMe: string) {
    this.username = us;
    this.name = nm;
    this.password = ps;
    this.scheduleId = sId;
    this.job = jb;
    this.about = aMe;
  }
}

class UserVO {
  name: string;
  job: string;
  about: string;
  scheduleID: number;

  constructor(name: string, job: string, about: string, scheduleID: number) {
    this.name = name;
    this.job = job;
    this.about = about;
    this.scheduleID = scheduleID;
  }
}
