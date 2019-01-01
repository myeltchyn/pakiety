import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Jorg } from '../model/jorg';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class PacketFormResolverService implements Resolve<Jorg[]>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Jorg[]> {
   
      return this.rest.jorg;
    
  }
  constructor(private rest:RestService) { }
}
