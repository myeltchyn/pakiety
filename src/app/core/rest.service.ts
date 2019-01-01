import { Injectable } from '@angular/core';
import { Wykonanie } from '../model/wykonanie';
import { Pakiet,pakiet } from '../model/pakiet';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Wykonaniezbiorcze } from '../model/wykonaniezbiorcze';
import { Jorg } from '../model/jorg';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) {
  /* this.jorg.subscribe(j=>this.jorgs=j,
    (error)=>console.log('error'),
    ()=>console.log(this.jorgs))*/
  }

  getPakiety(): Observable<Pakiet[]> {
    return this.http.get<Pakiet[]>('/api/pakiety').
        pipe(map((data)=>data.map((pakiet)=>new Pakiet(pakiet)))
    );
  }
  
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

  
}

