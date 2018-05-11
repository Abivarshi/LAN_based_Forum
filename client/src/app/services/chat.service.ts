import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  socket: any;
  imgChunks: string[] =[];
  
  constructor() {
    this.socket = io(this.url);
    this.getImages();
  }

  sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  sendImage(image) {
    this.socket.emit('new-image', image);
  }

  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  getImages = () => {
    this.socket.on('img-chunk', function (chunk) {
      console.log(this.imgChunks);
      var img = document.getElementById('img-stream2');
      this.imgChunks.push(chunk);
      img.setAttribute('src', 'data:image/jpeg;base64,' + window.btoa(this.imgChunks));
    });    
  }
}
