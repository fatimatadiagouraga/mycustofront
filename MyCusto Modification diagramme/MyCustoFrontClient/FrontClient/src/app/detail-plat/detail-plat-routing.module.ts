import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPlatPage } from './detail-plat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPlatPageRoutingModule {}
