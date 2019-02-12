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

  getPakietById(id:number):Observable<Pakiet>{
    return this.http.get<Pakiet>(`/api/pakiety/${id}`).
      pipe(map((data)=>new Pakiet(data)));
  }

  getCountExecuted(id:number):Observable<number>{
    return this.http.get<number>(`/api/wykonanie?pakietyId=${id}`).pipe(map((data)=>10));
  }

  getWykonaniaPakietow(page:number,limit:number,search:string):Observable<HttpResponse<Wykonaniezbiorcze>>{
    let uriWithoutFilter=`/api/pakiety?_embed=wykonanie&_page=${page}&_limit=${limit}`;
    let uriWithFilter=`/api/pakiety?_embed=wykonanie&_page=${page}&_limit=${limit}&nazwa_like=${search}`
    let uri='';
    !search ? uri=uriWithoutFilter : uri=uriWithFilter;
    return this.http.get<Wykonaniezbiorcze>(uri,{observe:'response'});
  }

  getWykonanie(page:number,limit:number,search:string):Observable<Pakiet[]>{
    let uriWithoutFilter=`/api/pakiety?_page=${page}&_limit=${limit}&_embed=wykonanie`;
    return this.http.get<Pakiet[]>(uriWithoutFilter);
  }

  get jorg():Observable<Jorg[]>{
    return this.http.get<Jorg[]>('/api/jorg');
    
  }

  savePacket(packet:pakiet):Observable<pakiet>{
    return this.http.post<pakiet>('/api/pakiety',packet);
  }
}
