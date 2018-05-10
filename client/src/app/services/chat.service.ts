import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  socket: any;
  //ctx: CanvasRenderingContext2D = this.childComponent.nativeElement.getContext("2d");

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  getImages = () => {
    this.socket.on("image", function (info) {
      if (info.image) {
        var img = new Image();
        img.src = 'data:image/jpeg;base64,' + info.buffer;
        //this.ctx.drawImage(img, 0, 0);
      }
    });
    
  }
}
