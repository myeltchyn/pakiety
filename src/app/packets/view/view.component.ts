import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { merge } from 'rxjs';
import { startWith, switchMap, map, tap } from 'rxjs/operators';
import { CONFIG, Config } from 'src/app/model/config';
import { DialogConfirm } from './dialog-confirm.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoadingResults = false;
  resultsLength = 0;
  searchingString = '';
  displayedColumns: string[] = ['nazwapakietu', 'zatwprzezias', 'liczbaok', 'osobazatwierdzajaca', 'datawydania', 'wykonacdo'];
  dataSource: Wykonaniezbiorcze;


  constructor(@Inject(CONFIG) public config: Config,
    private rest: RestService, private searchService: SearchService, public dialog: MatDialog) {
    console.log(this.config.baseUrl);
  }

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

  clickPacketName(event: number) {

    console.log(event);
    this.rest.getPakietById(event).subscribe(pakiet => {
      console.log(pakiet);
      this.dialog.open(DialogPacket, {
        data: {
          nazwa: pakiet.nazwa,
          dotUS: pakiet.dotUS,
          numer: 999
        }
      })
    }
    );

  }
clickConfirm(){
  console.log('confirm');
  this.dialog.open(DialogConfirm);
}

}

@Component({
  selector: 'dialog-packet',
  templateUrl: 'dialog-packet.html',
})
export class DialogPacket {

  constructor(
    @Inject(MAT_DIALOG_DATA) public pakiet) {
    console.log(this.pakiet);
  }


}