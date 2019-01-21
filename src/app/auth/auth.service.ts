import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
export const REST_URL = new InjectionToken("rest_url")
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth_token: string;
  constructor(private http: HttpClient,@Inject(REST_URL) private url:string) { }

  authenticate(user: string, pass: string): Observable<boolean> {
    console.log('API:'+this.url);
    return this.http
      .request(
        "POST",
        `${this.url}/login`, {
          body: { name: user, password: pass }
        }).pipe(map(data => {
          console.log("response:" + data["success"] + "token" + data["token"])
          this.auth_token = data["success"] ? data["token"] : null
          console.log("TOKEN:" + this.auth_token)
          return data["success"]
        }))
  }
}
