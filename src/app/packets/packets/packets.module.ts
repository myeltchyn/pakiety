import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacketsRoutingModule } from './packets-routing.module';
import { MainComponent } from '../main/main.component';
import { ViewComponent } from '../view/view.component';
import { RestService } from 'src/app/core/rest.service';
import { RepositoryService } from 'src/app/core/repository.service';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [MainComponent, ViewComponent],
  imports: [
    CommonModule,
    PacketsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    
  ],
  providers: [RestService, RepositoryService]
})
export class PacketsModule { }
