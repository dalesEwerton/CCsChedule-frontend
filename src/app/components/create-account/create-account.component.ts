import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  name: string;
  username: string;
  password: string;
  cpassword: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser() {

    var responce = false;
    if (this.password == this.cpassword) {
      responce = this.userService.addUser(this.username, this.username, this.password, 0);
    }

    if(responce) {
      this.name = '';
      this.username = '';
      this.password = '';
      this.cpassword = '';

      alert('Created');

    }else {

      this.username = '';
      alert('User is already in use');
    }
  }

}
