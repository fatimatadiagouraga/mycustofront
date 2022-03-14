import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';
import { ModifierPlatComponent } from './modifier-plat/modifier-plat.component';
import { AjoutPlatComponent } from './ajout-plat/ajout-plat.component';
import { AjoutMenuComponent } from './ajout-menu/ajout-menu.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ModifierMenuComponent } from './modifier-menu/modifier-menu.component';




const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path: "", redirectTo: "login", pathMatch: "full" },
  {path:"commande", component:CommandeComponent},
  {path:"menu", component:MenuComponent},
  {path:"plat", component:PlatComponent},
  {path:"modifPlat", component:ModifierPlatComponent},
  {path:"modifMenu", component:ModifierMenuComponent},

  {path:"ajoutPlat", component:AjoutPlatComponent},
  {path:"ajoutMenu", component:AjoutMenuComponent},
  {path:"ajoutAdmin", component:AjoutAdminComponent},
  {path:"modifierAdmin", component:ModifierAdminComponent},
  {path:"listAdmin", component:ListAdminComponent},





  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
