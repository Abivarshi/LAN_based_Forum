import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { user } from '../user';
import { group } from '../group';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: user;
  users: user[];
  groups: group[];
  group: group;
  group_name: string;
  admin: user;
  client: user[] = [];
  notifications: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(user => {
      this.user = user;
    },
      err => {
        console.log(err);
        return false;
      });

    this.userService.getUser()
      .subscribe(users =>
        this.users = users);

    this.authService.getNotification().subscribe(notifications => {
      console.log(notifications)
      this.notifications = notifications;
    },
      err => {
        console.log(err);
        return false;
      });

    this.getGroups();
  }

  joinChat(id) {
    this.authService.addClient(this.user, id)
      .subscribe(data => {
        console.log(data.msg);
      });
    this.router.navigate(['chat']);
  }

  addGroup() {
    const newGroup = {
      group_name: this.group_name,
      client: this.client
    }
    this.authService.addGroup(newGroup)
      .subscribe(group => {
        console.log(group);
        this.groups.push(group);
      });

    for (let nClient of this.client) {
      const newNotification = {
        userID: nClient._id,
        data: "You are invited to new Discussion '" + this.group_name + "' created by " + this.user.first_name
      }
      this.authService.addNotification(newNotification)
        .subscribe(data => {
          console.log(data);
        });
    }
    
  }

  getGroups() {
    this.authService.getGroup().subscribe(groups => {
      this.groups = groups;
    },
      err => {
        console.log(err);
        return false;
      });
  }

  addClient(user: user, isChecked: boolean) {
    if (isChecked) {
      this.client.push(user);
    }
  }

  removeNotification(id) {
    this.authService.removeNotification(id).subscribe(result => {
      console.log(result);
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
