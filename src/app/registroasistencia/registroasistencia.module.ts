import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroasistenciaPageRoutingModule } from './registroasistencia-routing.module';

import { RegistroasistenciaPage } from './registroasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroasistenciaPageRoutingModule
  ],
  declarations: [RegistroasistenciaPage]
})
export class RegistroasistenciaPageModule {}
