import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierInfoClientPageRoutingModule } from './modifier-info-client-routing.module';

import { ModifierInfoClientPage } from './modifier-info-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierInfoClientPageRoutingModule
  ],
  declarations: [ModifierInfoClientPage]
})
export class ModifierInfoClientPageModule {}
