import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ViewComponent } from '../view/view.component';
import { PacketFormComponent } from '../packet-form/packet-form.component';
import { PacketFormResolverService } from 'src/app/core/packet-form-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: ViewComponent },
      { path: 'dodaj', 
        component: PacketFormComponent, 
        resolve: { jo: PacketFormResolverService } 
      }
    ]

  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacketsRoutingModule { }
