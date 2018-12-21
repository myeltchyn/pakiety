import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';
import { MatPaginator, MatSort } from '@angular/material';
import { map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  resultsLength = 0;
  constructor(private rest: RestService) { }
  displayedColumns: string[] = ['nazwapakietu', 'zatwprzezias', 'liczbaok', 'osobazatwierdzajaca', 'datawydania', 'wykonacdo'];
  dataSource: Wykonaniezbiorcze;
  headers;
  ngOnInit() {
    this.paginator.pageIndex = 0;

    this.paginator.page.pipe().subscribe(() => {
      this.rest.getWykonaniaPakietow(this.paginator.pageIndex + 1, 5)
      
      .subscribe({
        next: (pakiet) => {this.dataSource=pakiet.body;
                          this.resultsLength =+pakiet.headers.get('x-total-count'); 
                        },
        error: () => alert("error during reading data!")
      });
    });

    this.paginator.page.emit();

 // }
}}
