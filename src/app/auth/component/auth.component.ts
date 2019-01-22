import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, Roles } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorLogin: string
  private message: string;
  hide = true;

  constructor(private router: Router, private auth: AuthService) { }


  onSubmit(form: NgForm) {
    console.log('submit');

    console.log(this.username + ' ' + this.password);
    localStorage.setItem("token", "place on the token");
    this.auth.authenticate(this.username, this.password)
      .subscribe(resp => {
        console.log('RESP: ' + resp.token);
        if (resp.success) {
          console.log("LOGOWANIE" + this.username + " " + this.password);
          this.auth.currentUser = { username: this.username, isAuthenticated: true, roles: [Roles.user] }
          this.router.navigateByUrl("/");
        }
        if (!this.auth.currentUser.isAuthenticated) {
          this.errorLogin = "Niepowodzenie logowania";
          this.message = "Invalid login or password!";
        }
      })
  }



}
