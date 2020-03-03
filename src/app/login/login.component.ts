import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user);
    this.router.navigateByUrl("/");
  }

}
