import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  job: string;
  about: string;

  constructor(private userService: UserService, private router: Router) {
      this.name = userService.getNameLogged();
      this.job = userService.getJobLogged();
      this.about = userService.getAboutLogged();
  }

  ngOnInit() {
  }

  logout() {
    this.userService.setUserLoggedIn(null);

    this.router.navigate(['']);
  }

}
