import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiderCommandePageRoutingModule } from './valider-commande-routing.module';

import { ValiderCommandePage } from './valider-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiderCommandePageRoutingModule
  ],
  declarations: [ValiderCommandePage]
})
export class ValiderCommandePageModule {}
