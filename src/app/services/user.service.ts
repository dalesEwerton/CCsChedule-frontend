import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  users: User[] = [];
  loggedIn = false;

  constructor() {
    console.log('User Service Conected...');

    const admUser = new User('admin', 'admin', 'admin', 0);

    this.users.push(admUser);
  }

  addUser(us: string, nm: string, ps: string, sId: number) {

    const newUser = new User(us, nm, ps, 0);

    if (this.validUsername(us)) {
      this.users.push(newUser);
      console.log(this.users);
      return true;

    }else {
      return false;
    }
  }

  login(username: string, password: string) {

    let index = 0;
    while (!this.loggedIn && index < this.users.length){

      if (this.users[index].username === username
        && this.users[index].password === password) {

        this.loggedIn = true;
      }

      index++;
    }

    if (this.loggedIn) {
      alert('Login Sucsess');
      window.location.replace('profile');
    }else {
      alert('Login Fail');
    }

    console.log(this.loggedIn);
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

  constructor(us: string, nm: string, ps: string, sId: number) {
    this.username = us;
    this.name = nm;
    this.password = ps;
    this.scheduleId = sId;
  }
}
