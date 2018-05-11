import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { user } from '../user';
import { group } from '../group';
import { ContentType } from '@angular/http/src/enums';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})

export class ChatComponent implements OnInit {
  id: string;
  first_name: string;
  last_name: string;
  message: string;
  messages: string[] = [];
  image: any;

  users: user[];
  groups: group[];
  group: group;
  group_id: any;
  group_name: string;
  admin: user;
  client: user[] = [];
  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(users =>
        this.users = users);

    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });

    this.authService.getProfile().subscribe(user => {
      this.id = user._id;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
    },
      err => {
        console.log(err);
        return false;
      });

    this.authService.getCurrentGroup(this.group_id).subscribe(group => {
      this.group = group;
      this.group_name = group.group_name;
      this.admin = group.admin;
      this.client = group.client;
    },
      err => {
        console.log(err);
        return false;
      });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  sendImage() {
    this.chatService.sendImage(this.image);
    this.image = '';
  }

}