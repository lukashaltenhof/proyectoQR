import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaclasePageRoutingModule } from './nuevaclase-routing.module';

import { NuevaClasePage } from './nuevaclase.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaclasePageRoutingModule
  ],
  declarations: [NuevaClasePage]
})
export class NuevaclasePageModule {}
