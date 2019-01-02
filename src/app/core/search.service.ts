import { Injectable } from '@angular/core';
import { Observable,of,from, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchingString=new Subject<string>()
  constructor() { }

  setSearchingString(substr:string){
    this.searchingString.next(substr);
  }

  getSearchingString():Observable<string>{
    return this.searchingString;
  }
}
