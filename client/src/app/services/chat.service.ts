import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private url = 'http://192.168.0.1:3000';
  socket: any;
  
  constructor() {
    this.socket = io(this.url);
  }

  //send message to server
  sendMessage(url, message, sender) {
    this.socket.emit('new-message', { url: url, message: message, sender: sender });
  }

  //send image to server
  sendImage(path) {
    this.socket.emit('img-send', path);
  }

  //receive message from server
  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      });
    });
  }

  //receive image from server
  getImages = () => {
    return Observable.create((observer) => {
      this.socket.on('img-chunk', function (chunk) {
        observer.next(chunk);
      });
    });
  }


}
