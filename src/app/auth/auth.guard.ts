import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, Roles } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('ROle: ' + this.auth.currentUser.roles + ' ' + next.data.role);

    if (!this.auth.currentUser.isAuthenticated) {
      this.router.navigateByUrl("/login");
      return false
    }
    if (this.auth.currentUser.roles != next.data.role) {
      alert("Nie masz uprawnień do tej funkcji!");
      this.router.navigateByUrl("/login");
    }
    else
      return true
  }
}
