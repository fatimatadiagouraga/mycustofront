import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierInfoClientPage } from './modifier-info-client.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierInfoClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierInfoClientPageRoutingModule {}
