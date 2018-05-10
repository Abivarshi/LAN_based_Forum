import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { user } from '../user';
import { group } from '../group';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})

export class ChatComponent implements OnInit {
  first_name: string;
  last_name: string;
  message: string;
  messages: string[] = [];

  users: user[];
  groups: group[];
  group: group;
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
      this.first_name = user.first_name;
      this.last_name = user.last_name;
    },
      err => {
        console.log(err);
        return false;
      });
  }

  sendMessage() {
    this.chatService.sendMessage(this.first_name+" : "+this.message);
    this.message = '';
  }

}
