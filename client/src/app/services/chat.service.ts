import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private url = 'https://chat-on-lan.herokuapp.com';
  socket: any;
  
  constructor() {
    this.socket = io(this.url);
    //this.getImages();
  }

  sendMessage(url, message, sender) {
    this.socket.emit('new-message', { url: url, message: message, sender: sender });
  }

  sendImage(image) {
    this.socket.emit('img-chunk', image);
  }

  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      });
    });
  }

  getImages = () => {
    return Observable.create((observer) => {
      this.socket.on('img-chunk', function (chunk) {
        observer.next(chunk);
      });
    });    
  }

}
