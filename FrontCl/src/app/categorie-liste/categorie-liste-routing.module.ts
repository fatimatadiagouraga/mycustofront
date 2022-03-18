import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieListePage } from './categorie-liste.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieListePageRoutingModule {}
