import { Injectable } from '@angular/core';
import { Wykonanie } from '../model/wykonanie';
import { Pakiet,pakiet } from '../model/pakiet';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Wykonaniezbiorcze } from '../model/wykonaniezbiorcze';
import { Jorg } from '../model/jorg';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) {
   
  }

  getPakiety(): Observable<Pakiet[]> {
    return this.http.get<Pakiet[]>('/api/pakiety').
        pipe(map((data)=>data.map((pakiet)=>new Pakiet(pakiet)))
    );
  }

  /*get wykonaniaPakietow():Observable<Wykonaniezbiorcze[]>{
    return this.http.get<Wykonaniezbiorcze[]>('/api/wykonaniezbiorcze').
        pipe(map((data)=>data.map((pakiet)=>new Wykonaniezbiorcze(pakiet)))
    );
  }*/

  getWykonaniaPakietow(page:number,limit:number,search:string):Observable<HttpResponse<Wykonaniezbiorcze>>{
    let uriWithoutFilter=`/api/items?_page=${page}&_limit=${limit}`;
    let uriWithFilter=`/api/items?_page=${page}&_limit=${limit}&nazwapakietu_like=${search}`
    let uri='';
    !search ? uri=uriWithoutFilter : uri=uriWithFilter;
    return this.http.get<Wykonaniezbiorcze>(uri,{observe:'response'});
  }

  get jorg():Observable<Jorg[]>{
    return this.http.get<Jorg[]>('/api/jorg');
    
  }

  savePacket(packet:pakiet):Observable<pakiet>{
    return this.http.post<pakiet>('/api/pakiety',packet);
  }
}
