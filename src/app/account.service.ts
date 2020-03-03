import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }


  createAccount(user:User){
    return this.http.post(this.baseUrl+'users/sign-up', user);
  }

}
