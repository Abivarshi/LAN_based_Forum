import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  id: any;

  constructor(private http: Http) {
    //this.isDev = true; 
  }

  registerUser(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/register', user, { headers: headers })
      .map(res => res.json());
  }

  addUser(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addUser', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/authenticate', user, { headers: headers })
      .map(res => res.json());
  }
  /*
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/profile', { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }
  */

  getProfile() {
    var headers = new Headers();
    const id = this.loadId();
    return this.http.get('http://localhost:3000/api/profile/' + id, { headers: headers })
      .map(res => res.json());
  }

  editProfile(user) {
    var headers = new Headers();
    const id = this.loadId();
    return this.http.put('http://localhost:3000/api/update/' + id, user, { headers: headers })
      .map(res => res.json());
  }

  changePwd(pwd) {
    var headers = new Headers();
    const id = this.loadId();
    return this.http.put('http://localhost:3000/api/changePwd/' + id, pwd, { headers: headers })
      .map(res => res.json());
  }

  addNotification(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addNotification', data, { headers: headers })
      .map(res => res.json());
  }

  removeNotification(id) {
    return this.http.delete('http://localhost:3000/api/removeNotification/' + id)
      .map(res => res.json());
  }

  getNotification() {
    const id = this.loadId();
    var headers = new Headers();
    return this.http.get('http://localhost:3000/api/getNotification/' + id, { headers: headers })
      .map(res => res.json());
  }

  getGroup() {
    var headers = new Headers();
    return this.http.get('http://localhost:3000/api/groups', { headers: headers })
      .map(res => res.json());
  }

  addGroup(newGroup) {
    var headers = new Headers();
    const id = this.loadId();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addGroup/' + id, newGroup, { headers: headers })
      .map(res => res.json());
  }

  addClient(user, id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addClient/' + id, user, { headers: headers })
      .map(res => res.json());
  }

  getCurrentGroup(id) {
    var headers = new Headers();
    return this.http.get('http://localhost:3000/api/group/' + id, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, id, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.id = id;
    this.user = user;
  }

  loadId() {
    const id = localStorage.getItem('id');
    this.id = id;
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    return id;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  isAdmin() {
    return (this.id == "5aeec8a7ec9c300014700f29" && tokenNotExpired('id_token'));
  }

  isWorker() {
    return (this.id != "5aeec8a7ec9c300014700f29" && tokenNotExpired('id_token'));
  }

  logout() {
    this.id = null;
    this.user = null;
    localStorage.clear();
  }

}
