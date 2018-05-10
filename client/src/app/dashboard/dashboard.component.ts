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
  users: user[];
  groups: group[];
  group: group;
  group_name: string;
  admin: user;
  client: user[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(users =>
        this.users = users);

    this.getGroups();
  }

  joinChat(id) {
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
    console.log(this.client);
    if (isChecked) {
      this.client.push(user);
    }
  }

}
