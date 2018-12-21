import { Injectable } from '@angular/core';
import { Wykonanie } from '../model/wykonanie';
import { Pakiet,pakiet } from '../model/pakiet';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Wykonaniezbiorcze } from '../model/wykonaniezbiorcze';

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
  
  getWykonaniaPakietow(page:number,limit:number):Observable<HttpResponse<Wykonaniezbiorcze>>{
    return this.http.get<Wykonaniezbiorcze>(`/api/items?_page=${page}&_limit=${limit}`,{observe:'response'});
  }
}

