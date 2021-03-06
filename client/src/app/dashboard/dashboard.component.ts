import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
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
  currentUser: user;
  users: user[] =[];
  groups: group[];
  group_name: string;
  admin: user;
  client: user[] = [];
  notifications: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private chatService: ChatService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(user => {
      this.currentUser = user;
    },
      err => {
        console.log(err);
        return false;
      });

    this.userService.getUser()
      .subscribe(users =>
        this.users = users);

    this.authService.getNotification().subscribe(notifications => {
      this.notifications = notifications;
    },
      err => {
        console.log(err);
        return false;
      });

    this.getGroups();
  }

  joinChat(group) {
    var oldClient = false;
    for (let nClient of group.client) {
      if (this.currentUser._id === nClient._id) {
        oldClient = true;
      }
    }
    if (this.currentUser._id === group.admin._id) {
      oldClient = true;
    }
    if (oldClient === false) {
      this.authService.addClient(this.currentUser, group._id)
        .subscribe(data => {
          console.log(data.msg);
        });
    }
    this.router.navigate(['chat/' + group._id]);
  }

  addGroup() {
    const newGroup = {
      group_name: this.group_name,
      client: this.client
    }
    this.authService.addGroup(newGroup)
      .subscribe(group => {
        this.groups.push(group);

        for (let nClient of this.client) {
          const newNotification = {
            userID: nClient._id,
            type: "group",
            data: { grpName: group.group_name, grpAdmin: group.admin.first_name, grpID: group._id }
          }
          this.authService.addNotification(newNotification)
            .subscribe(data => {
              //console.log(data);
            });
        }
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

  acceptJoinGrp(groupID) {
    this.router.navigate(['chat/' + groupID]);
  }

  rejectJoinGrp(groupID, id) {
    this.authService.removeClient(this.currentUser, groupID).subscribe(result => {
      this.flashMessage.show("Request is rejected", { cssClass: 'alert-success', timeout: 5000 });
    },
      err => {
        console.log(err);
        return false;
      });

    this.authService.removeNotification(id).subscribe(result => {
      console.log(result);
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
