import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { user } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  user: user;
  first_name: string;
  last_name: string;
  phone: string;
  occupation: string;
  email: string;
  password: string;
  new_password: string;
  conform_password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(user => {
      this.user = user;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.phone = user.phone;
      this.occupation = user.occupation;
      this.email = user.email;
    },
      err => {
        console.log(err);
        return false;
      });
  }

  editProfile() {
    let newUser = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      occupation: this.occupation,
      email: this.email
    }
    this.authService.editProfile(newUser).subscribe(data => {
      this.user = data.user;
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    },
      err => {
        console.log(err);
        return false;
      });
  }

  changePwd() {
    let pwd = {
      password: this.password,
      new_password: this.new_password,
      conform_password: this.conform_password
    }
    if (pwd.new_password == pwd.conform_password) {
      this.authService.changePwd(pwd).subscribe(data => {
        this.user = data.user;
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }
      },
        err => {
          console.log(err);
          return false;
        });      
      
    } else {
      this.flashMessage.show("New password is not match with the conform password", { cssClass: 'alert-danger', timeout: 5000 });
      this.router.navigate(['profile']);
    }
  }

}
