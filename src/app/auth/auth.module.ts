import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './component/auth.component';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { REST_URL } from './auth.service';
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[{provide:REST_URL,useValue:`/api`}]
})
export class AuthModule { }
