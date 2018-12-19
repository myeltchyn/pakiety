import { Injectable } from '@angular/core';
import { Wykonanie } from '../model/wykonanie';
import { Pakiet,pakiet } from '../model/pakiet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Wykonaniezbiorcze } from '../model/wykonaniezbiorcze';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) {
   /* this.pakiet = new Pakiet(1, "Aplikacja CZM wydanie 2018.10",
      new Date("2018-12-12"), new Date("2018-12-20"), false, [2804, 2805, 2807])
    this.wykonania.push(new Wykonanie(1, true, new Date("2018-12-12"), new Date("2018-12-13"),
      "uzytkownik", 2804, this.pakiet));*/
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

  get wykonaniaPakietow():Observable<Wykonaniezbiorcze[]>{
    return this.http.get<Wykonaniezbiorcze[]>('/api/wykonaniezbiorcze');
  }
}
