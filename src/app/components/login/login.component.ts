import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  login(e) {

    e.preventDefault();

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    let responce: boolean;

    responce = this.userService.authUser(username, password);

    if(responce) {

      this.router.navigate(['profile']);
    }else {

      window.location.reload();
    }
  }


  createAccount() {
      this.router.navigate(['createaccount']);
  }

}
