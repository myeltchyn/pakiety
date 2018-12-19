//No

import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Pakiet } from '../model/pakiet';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  packets: Pakiet[] = [];
  constructor(private rest: RestService) { }

  getPackets(){
    
    console.log(this.packets);
    return this.rest.getPakiety();
  }
}
