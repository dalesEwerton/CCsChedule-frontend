import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class UserService {


  private users: User[];
  private loggedIn: boolean;
  private user: User;

  constructor(private router: Router) {
    this.users = [];
    this.loggedIn = false;
    this.user = null;
  }

  addUser(username: string, name: string, password: string, scheduleId: number, job: string, aboutMe: string) {

    const newUser = new User(username, name, password, 0, job, aboutMe);

    if (this.validUsername(username)) {
      this.users.push(newUser);

      this.router.navigate(['login']);

    }else {
      alert('Username is already in use');
    }
  }

  getUser(username: string) {

    for (let i = 0 ; i < this.users.length ; i++) {

      if (this.users[i].username === username) {
        return this.users[i];
      }
    }

    return null;

  }

  setUserLoggedIn(user: User) {

    this.user = user;
    this.loggedIn = true;
  }

  getUserLoggedIn() {
    return this.loggedIn;
  }

  getNameLogged() {
    return this.user.name;
  }

  getJobLogged() {
    return this.user.job;
  }

  getAboutLogged() {
    return this.user.aboutMe;
  }

  private validUsername(username: string) {

    let valid = true;
    for (let i = 0 ; i < this.users.length ; i++) {
      if ( this.users[i].username === username) {
        valid = false;
      }
    }

    return valid;
  }

}

class User {

  username: string;
  name: string;
  password: string;
  scheduleId: number;
  job: string;
  aboutMe: string;

  constructor(us: string, nm: string, ps: string, sId: number, jb: string, aMe: string) {
    this.username = us;
    this.name = nm;
    this.password = ps;
    this.scheduleId = sId;
    this.job = jb;
    this.aboutMe = aMe;
  }
}
