import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPlatPageRoutingModule } from './detail-plat-routing.module';

import { DetailPlatPage } from './detail-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPlatPageRoutingModule
  ],
  declarations: [DetailPlatPage]
})
export class DetailPlatPageModule {}
