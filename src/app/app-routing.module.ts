import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http404Component } from './core/http404/http404.component';
import { PacketsModule } from './packets/packets/packets.module';
import { AuthComponent } from './auth/component/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { Roles } from './auth/auth.service';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'pakiety', canActivate:[AuthGuard],data:{role:Roles.user}, loadChildren: () => PacketsModule },
  { path: '', redirectTo: 'pakiety', pathMatch: 'full' },
  { path: '**', component: Http404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
