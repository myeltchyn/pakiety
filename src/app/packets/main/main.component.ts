import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  search = true;
  searchString='';
  prevSearchString='';
  searchForm: FormGroup;
  constructor(private searchService:SearchService,public router:Router) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchField: new FormControl('')
      });
      this.searchForm.valueChanges.subscribe(c=>this.searchService.setSearchingString(c));
  }

  doSearch(): void {
    this.search = false;
  }

  closeSearch(): void {
    this.search = true;
    this.searchString!=null ? this.searchService.setSearchingString(''):null;
  }
  onKey(event: any) {
   this.searchString=event.target.value;
   this.prevSearchString!==this.searchString ? this.searchService.setSearchingString(this.searchString.trim()):null;
   this.prevSearchString=this.searchString;
  }
}
