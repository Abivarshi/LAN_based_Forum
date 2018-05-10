import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { user } from './../user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser() {
    return this.http.get('http://localhost:3000/api/users')
      .map(res => res.json());
  }

  getUserRequest() {
    return this.http.get('http://localhost:3000/api/requests')
      .map(res => res.json());
  }

  addUser(newUser) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/adduser', newUser, { headers: headers })
      .map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:3000/api/user/' + id)
      .map(res => res.json());
  }

  deleteUserRequest(id) {
    return this.http.delete('http://localhost:3000/api/deleterequest/' + id)
      .map(res => res.json());
  }

}
