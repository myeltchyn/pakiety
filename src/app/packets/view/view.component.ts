import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { merge } from 'rxjs';
import { startWith, switchMap, map, tap } from 'rxjs/operators';
import { CONFIG, Config } from 'src/app/model/config';
import { DialogConfirm } from './dialog-confirm.component';
import { Wykonanie } from 'src/app/model/wykonanie';
import { Pakiet } from 'src/app/model/pakiet';

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
  wykonanie: Wykonanie[] = [];
  pakiety: Pakiet[] = [];

  constructor(@Inject(CONFIG) public config: Config,
    private rest: RestService, private searchService: SearchService, public dialog: MatDialog) {
    console.log(this.config.baseUrl);
  }

  ngOnInit() {
    this.paginator._intl.nextPageLabel = 'Dalej';
    this.paginator._intl.itemsPerPageLabel = 'Ilość na stronie';
    this.paginator._intl.firstPageLabel = 'Pierwszy';
    merge(this.paginator.page, this.searchService.getSearchingString(), this.sort.sortChange)
      .pipe(startWith({}), map((search) => this.searchingString = search['searchField']),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.rest.getWykonaniaPakietow(this.paginator.pageIndex + 1, 8, this.searchingString)
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

  getWykonanie() {
    this.rest.getWykonanie(0, 5, '').pipe(tap(x=>console.log(x)))
      .subscribe();
  }

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