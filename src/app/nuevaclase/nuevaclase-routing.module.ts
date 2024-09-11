import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaClasePage } from './nuevaclase.page';


const routes: Routes = [
  {
    path: '',
    component: NuevaClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaclasePageRoutingModule {}
