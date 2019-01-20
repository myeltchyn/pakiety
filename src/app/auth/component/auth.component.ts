import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  {
  public username:string;
  public password:string;
  public errorLogin:string
  private message:string;
  hide=true;
  
  constructor(private router: Router) { }

 
onSubmit(form:NgForm){
  console.log('submit');
  
  
  localStorage.setItem("token","place on the token")
  /*
  this.auth.authenticate(this.username, this.password)
  .subscribe(resp => {
    if (resp) {
      console.log("LOGOWANIE" + this.username + " " + this.password)
      this.router.navigateByUrl("/")
    }
    this.errorLogin="Niepowodzenie logowania"
    this.message="Invalid login or password!"
  }) */
}

  

}
