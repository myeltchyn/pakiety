import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { merge, Observable, of, from } from 'rxjs';
import { startWith, switchMap, map, tap } from 'rxjs/operators';
import { CONFIG, Config } from 'src/app/model/config';
import { DialogConfirm } from './dialog-confirm.component';
import { delay } from 'q';
const myObservable = of(1, 2, 3);
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  komorka;
  isLoadingResults = false;
  resultsLength = 0;
  searchingString = '';
  displayedColumns: string[] = ['nazwa', 'zatwprzezias', 'count', 'osobazatwierdzajaca', 'dataWydania', 'terminWykonania'];
  dataSource: Wykonaniezbiorcze;
  count:Observable<number>;

  constructor(@Inject(CONFIG) public config: Config,
    private rest: RestService, private searchService: SearchService, public dialog: MatDialog) {
    console.log(this.config.baseUrl);
    setInterval(() => {
      console.log('odswiezam');
      this.count=this.countExecute(1);
      console.log(this.komorka);
    }, 5000);
  }
  setKomorka(id:number){
    this.komorka=id;
  }
  ngOnInit() {
    //this.count=this.countExecute();
    this.paginator._intl.nextPageLabel='Dalej';
    this.paginator._intl.itemsPerPageLabel='Ilość na stronie';
    this.paginator._intl.firstPageLabel='Pierwszy';
    merge(this.paginator.page, this.searchService.getSearchingString(), this.sort.sortChange)
      .pipe(startWith({}), map((search) => this.searchingString = search['searchField']),
        switchMap(() => {
          this.isLoadingResults = true;
          //this.count=this.rest.getCountExecuted(1);
          return this.rest.getWykonaniaPakietow(this.paginator.pageIndex + 1, 8, this.searchingString)
        }
        ))
      .subscribe(pakiet => {
        next: {
          this.isLoadingResults = false;
          console.log(pakiet);
          this.dataSource = pakiet.body;
          this.resultsLength = +pakiet.headers.get('x-total-count');
        }
        complete:{console.log(this.dataSource[5].status)}
        error: () => { console.log('error') };
      });

  }
/*
  getWykonanie() {
    this.rest.getWykonanie(0, 5, '').pipe(tap(x => console.log(x)))
      .subscribe(data => {
        next: {
          this.pakiety = data;
          console.log(this.pakiety[0].wykonanie[0].wykonal);
        }
        error: () => console.log('error')
      })
  }
*/
  clickPacketName(id: number) {
    this.isLoadingResults = true;
    this.rest.getPakietById(id).subscribe(pakiet => {
      this.isLoadingResults = false;
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
  clickConfirm(id: number) {
    this.isLoadingResults = true;
    this.rest.getPakietById(id).subscribe(pakiet => {
      this.isLoadingResults = false;
      const dialogRef = this.dialog.open(DialogConfirm, {
        disableClose: true,
        data: {
          nazwa: pakiet.nazwa,
        }
      });

      dialogRef.afterClosed().subscribe(dataFromDialog => console.log('z dialogu' + dataFromDialog))
    }
    );

  }

countExecute(element:number):Observable<number>{
  return this.count=this.rest.getCount(element);
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