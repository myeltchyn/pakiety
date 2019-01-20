import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './component/auth.component';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ]
})
export class AuthModule { }
