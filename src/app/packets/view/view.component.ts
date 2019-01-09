import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { merge } from 'rxjs';
import { startWith, switchMap, map, tap } from 'rxjs/operators';
import { Pakiet, pakiet } from 'src/app/model/pakiet';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  animal = 'HotDog';
  name = 'king';
  x=new Pakiet();

  isLoadingResults = false;
  resultsLength = 0;
  searchingString = '';
  displayedColumns: string[] = ['nazwapakietu', 'zatwprzezias', 'liczbaok', 'osobazatwierdzajaca', 'datawydania', 'wykonacdo'];
  dataSource: Wykonaniezbiorcze;


  constructor(private rest: RestService, private searchService: SearchService, public dialog: MatDialog) { }

  ngOnInit() {

    merge(this.paginator.page, this.searchService.getSearchingString(), this.sort.sortChange)
      .pipe(startWith({}), map((search) => this.searchingString = search['searchField']),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.rest.getWykonaniaPakietow(this.paginator.pageIndex + 1, 5, this.searchingString)
        }
        ))
      .subscribe((pakiet) => {
        next: {
          this.isLoadingResults = false;
          console.log(pakiet);
          this.dataSource = pakiet.body;
          this.resultsLength = +pakiet.headers.get('x-total-count');
        }
        error: () => { console.log('error') };
      });

  }

  clickPacketName(event:number) {
    
    console.log(event);
    this.rest.getPakietById(event).subscribe(pakiet=>{
      console.log(pakiet);
      this.dialog.open(DialogPacket, { data: pakiet })}
      );
    
  }
}

@Component({
  selector: 'dialog-packet',
  templateUrl: 'dialog-packet.html',
})
export class DialogPacket {

  constructor(
    @Inject(MAT_DIALOG_DATA) public pakiet: Pakiet) { }


}