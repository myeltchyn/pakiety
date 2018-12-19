import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { Wykonaniezbiorcze } from 'src/app/model/wykonaniezbiorcze';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private rest: RestService) { }
  displayedColumns: string[] = ['nazwapakietu','zatwprzezias','liczbaok','osobazatwierdzajaca', 'datawydania','wykonacdo'];
  dataSource :Wykonaniezbiorcze[] = [];
  
  ngOnInit() {

    this.rest.wykonaniaPakietow.subscribe({
      next: (pakiet) => {
        this.dataSource = pakiet;
      },
      error: () => alert("error during reading data!")
    }

    );
  }

}
