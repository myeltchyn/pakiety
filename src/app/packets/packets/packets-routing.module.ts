import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ViewComponent } from '../view/view.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: ViewComponent},

    ]

  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacketsRoutingModule { }
