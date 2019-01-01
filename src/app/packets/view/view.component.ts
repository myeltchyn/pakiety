import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort} from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultsLength = 0;
  searchingString='';
  displayedColumns: string[] = ['nazwapakietu', 'zatwprzezias', 'liczbaok', 'osobazatwierdzajaca', 'datawydania', 'wykonacdo'];
  dataSource: Wykonaniezbiorcze;
  headers;
  
  constructor(private rest: RestService,private searchService:SearchService) { }

  ngOnInit() {
    
    
    this.searchService.getSearchingString().subscribe(s=>{
      this.searchingString=s;
      console.log(this.searchingString);
      this.paginator.page.emit();
    });

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //operator rxjs startwith pierwsze wykonanie bez zdarzenia
    this.paginator.page.pipe(startWith({})).subscribe(() => {
      this.rest.getWykonaniaPakietow(this.paginator.pageIndex + 1, 5,this.searchingString)
        .subscribe({
        next: (pakiet) => {this.dataSource=pakiet.body;
                          this.resultsLength =+pakiet.headers.get('x-total-count'); 
                        },
        error: () => alert("error during reading data!")
      });
    });

  //  this.paginator.page.emit();

}
ngOnDestroy(){
}
}
