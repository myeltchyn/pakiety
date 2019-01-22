import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
export const REST_URL = new InjectionToken("rest_url")
export interface LoginInter {
  success:boolean;
  token:string
}

export enum Roles {
  'admin',
  'user'
}
export interface CurrentUser {
  username?:string;
  isAuthenticated?:boolean;
  roles?:Roles[];
  token?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth_token: string;
  currentUser:CurrentUser={};
  constructor(private http: HttpClient,@Inject(REST_URL) private url:string) { }

  authenticate(user: string, pass: string): Observable<LoginInter> {
    console.log('API:'+this.url);
    return this.http
      .request<LoginInter>(
        "POST",
        `${this.url}/login`, {
          body: { name: user, password: pass }
        })
  }
}
