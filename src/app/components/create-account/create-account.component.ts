import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser(e) {
    e.preventDefault();
    e.preventDefault();

    const name = e.target.elements[0].value;
    const username = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    const cpassword = e.target.elements[3].value;
    const job = e.target.elements[4].value;
    const aboutMe = e.target.elements[5].value;

    let created = false;

    if (password === cpassword) {
      created = this.userService.addUser(
        username,
        name,
        password,
        0,
        job,
        aboutMe
      );
    }else {
      alert('Passwords doesn\'t match');
      window.location.reload();
    }

    if (created) {

      this.router.navigate(['login']);
    }else {
      window.location.reload();
    }
  }
}
