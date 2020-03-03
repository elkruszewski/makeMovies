import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isLogged: boolean = true;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // if(localStorage.getItem('token') != null)
    //   this.isLogged = true;
    // else
    //   this.isLogged = false;
    // this.authService.watchLogin().subscribe(data => this.isLogged = data);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
