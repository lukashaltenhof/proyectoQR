import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroasistenciaPage } from './registroasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroasistenciaPageRoutingModule {}
