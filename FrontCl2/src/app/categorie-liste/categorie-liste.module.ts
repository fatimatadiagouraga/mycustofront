import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieListePageRoutingModule } from './categorie-liste-routing.module';

import { CategorieListePage } from './categorie-liste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieListePageRoutingModule
  ],
  declarations: [CategorieListePage]
})
export class CategorieListePageModule {}
