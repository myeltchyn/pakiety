import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacketsRoutingModule } from './packets-routing.module';
import { MainComponent } from '../main/main.component';
import { ViewComponent, DialogPacket } from '../view/view.component';
import { RestService } from 'src/app/core/rest.service';
import { RepositoryService } from 'src/app/core/repository.service';
import { MatTableModule, MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { PacketFormComponent } from '../packet-form/packet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { PacketFormResolverService } from '../../core/packet-form-resolver.service';
import { TrueFalsePipe } from '../../pipes/true-false.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SearchService } from 'src/app/core/search.service';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirm } from '../view/dialog-confirm.component';

@NgModule({
  declarations: [MainComponent, ViewComponent, PacketFormComponent, TrueFalsePipe, DialogPacket, DialogConfirm],
  imports: [
    CommonModule,
    PacketsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [RestService, RepositoryService, PacketFormResolverService, SearchService],
  entryComponents: [DialogPacket,DialogConfirm]
})
export class PacketsModule { }
