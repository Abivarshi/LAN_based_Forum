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
  url: any = this.router.url;
  message: string;
  sender: string;
  messages: string[] = [];
  imgChunks = [];
  image: any;

  users: user[];
  /*groups: group[];
  group: group;
  group_id: any;
  group_name: string;
  admin: user;*/
  client: user[] = [];
  newClient: user[] = [];

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
      .subscribe((data) => {
        this.messages.push(data);
      });

    /*this.chatService
      .getImages()
      .subsribe((chunk: string) => {
        console.log(this.imgChunks);
        var img = document.getElementById('img-stream2');
        this.imgChunks.push(chunk);
        img.setAttribute('src', 'data:image/jpeg;base64,' + window.btoa(chunk));
      });*/

    this.authService.getProfile().subscribe(user => {
      this.id = user._id;
      this.first_name = user.first_name;
      this.sender = user.first_name;
    },
      err => {
        console.log(err);
        return false;
      });

    /*this.authService.getCurrentGroup(this.chatService.currentGroup).subscribe(group => {
      this.group = group;
      this.group_id = group._id;
      this.group_name = group.group_name;
      this.admin = group.admin;
      this.client = group.client;
    },
      err => {
        console.log(err);
        return false;
      });*/
  }

  sendMessage() {
    this.chatService.sendMessage(this.url, this.message, this.sender);
    this.message = '';
  }

  sendImage() {
    this.chatService.sendImage(this.image);
    this.image = '';
  }

  addClient(user: user, isChecked: boolean) {
    console.log(this.newClient);
    if (isChecked) {
      this.newClient.push(user);
    }
    for (let client of this.newClient) {
      this.authService.addGroup(client)
        .subscribe(data => {
          console.log(data.msg);
        },
        err => {
          console.log(err);
          return false;
        });
    }    
  }

}
