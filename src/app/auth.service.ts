import { Injectable } from '@angular/core';
import {Response, RequestOptions} from '@angular/http';
import { User } from './user';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:8080/";

  private isLogged = new Subject<boolean>();

  constructor(public http: HttpClient) { }

  watchLogin(): Observable<any> {
    return this.isLogged.asObservable();
  }

  login(user: User) {
    return this.http.post(this.baseUrl+"login", user, {observe: 'response'}).subscribe(data => {
      localStorage.setItem('token', data.headers.get("Authorization"));
      this.isLogged.next(true);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogged.next(false);
  }

}
