import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SearchService } from 'src/app/core/search.service';
import { merge } from 'rxjs';
import { startWith, switchMap, map, tap } from 'rxjs/operators';

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

  clickPacketName() {
    this.dialog.open(DialogPacket, {
      data: {
        animal: 'panda'
      }
    });
  }
}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'dialog-packet',
  templateUrl: 'dialog-packet.html',
})
export class DialogPacket {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


}