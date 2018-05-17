import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SendImageService {

  private url = 'http://192.168.0.1:3000';
  socket: any;

  constructor() {
    this.socket = io(this.url);
    this.getImages();
  }

  sendImage(image) {
    this.socket.emit('img-chunk', image);
  }

  getImages = () => {
    return Observable.create((observer) => {
      this.socket.on('img-chunk', function (chunk) {
        observer.next(chunk);
      });
    });
  }

}
