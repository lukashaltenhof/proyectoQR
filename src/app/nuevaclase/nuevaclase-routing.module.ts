import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaclasePage } from './nuevaclase.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaclasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaclasePageRoutingModule {}
