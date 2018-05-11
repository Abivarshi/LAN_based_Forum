import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { user } from '../user';
import { request } from '../user';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
  providers: [UserService]
})
export class DashboardAdminComponent implements OnInit {
  users: user[];
  requests: request[];
  user: user;
  first_name: string;
  last_name: string;
  phone: string;
  occupation: string;
  email: string;
  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(users =>
        this.users = users);

    this.userService.getUserRequest()
      .subscribe(requests =>
        this.requests = requests);
  }

  acceptUser(request) {
    const user = {
      first_name: request.first_name,
      last_name: request.last_name,
      phone: request.phone,
      occupation: request.occupation,
      email: request.email,
      username: request.username,
      img: {
        data: request.img.data,
        contentType: request.img.contentType
      }
    }

    this.authService.addUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Requet Accepted', { cssClass: 'alert-success', timeout: 1000 });
        this.users.push(data.user);
      } else {
        this.flashMessage.show('Something went wrong..', { cssClass: 'alert-danger', timeout: 1000 });
      }
    });
    //this.rejectUser(request._id);
  }

  deleteUser(id: any) {
    var users = this.users;
    this.userService.deleteUser(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
              users.splice(i, 1);
            }
          }
        }
      })
  }

  rejectUser(id: any) {
    var requests = this.requests;
    this.userService.deleteUserRequest(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < requests.length; i++) {
            if (requests[i]._id == id) {
              requests.splice(i, 1);
            }
          }
        }
      })
  }

}
