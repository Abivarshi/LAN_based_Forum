import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { SendImageService } from '../services/send-image.service';
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
  image: File;
  path: string;

  users: user[];
  client: user[] = [];
  newClient: user[] = [];

  constructor(
    private chatService: ChatService,
    private sendImageService: SendImageService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    //get all users
    this.userService.getUser()
      .subscribe(users =>
        this.users = users);

    //get message and image from another user
    this.chatService
      .getMessages()
      .subscribe((data) => {
        this.messages.push(data);
      });

    this.chatService.getImages().subscribe((chunk) => {
      var img = document.getElementById('img-stream');
      this.imgChunks.push(chunk);
      img.setAttribute('src', 'data:image/jpeg;base64,' + window.btoa(chunk));
    });

    //get current user profile
    this.authService.getProfile().subscribe(user => {
      this.id = user._id;
      this.first_name = user.first_name;
      this.sender = user.first_name;
    },
      err => {
        console.log(err);
        return false;
      });

  }

  // send message and image from one user
  sendMessage() {
    this.chatService.sendMessage(this.url, this.message, this.sender);
    this.message = '';
  }

  sendImage() {
    this.chatService.sendImage('../../LDF_Photo/1.jpg');
  }

  //add new client to added new group
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
