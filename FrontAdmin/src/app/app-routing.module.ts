import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutadminComponent } from './ajoutadmin/ajoutadmin.component';
import { AjoutmenuComponent } from './ajoutmenu/ajoutmenu.component';
import { AjoutplatComponent } from './ajoutplat/ajoutplat.component';
import { CommandeComponent } from './commande/commande.component';
import { HeaderComponent } from './header/header.component';
import { ListadminComponent } from './listadmin/listadmin.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
import { ModifiermenuComponent } from './modifiermenu/modifiermenu.component';
import { ModifierplatComponent } from './modifierplat/modifierplat.component';
import { PlatComponent } from './plat/plat.component';
import { PlatParMenuComponent } from './plat-par-menu/plat-par-menu.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:'acceuil', component:AcceuilComponent},
  {path:'header', component:HeaderComponent},
  {path:"commande", component:CommandeComponent},
  {path:"menu", component:MenuComponent},
  {path:"plat", component:PlatComponent},
  {path:"modifPlat", component:ModifierplatComponent},
  {path:"modifMenu", component:ModifiermenuComponent},
  {path:"ajoutPlat", component:AjoutplatComponent},
  {path:"ajoutMenu", component:AjoutmenuComponent},
  {path:"ajoutAdmin", component:AjoutadminComponent},
  {path:"modifierAdmin", component:ModifieradminComponent},
  {path:"listAdmin", component:ListadminComponent},
  {path:"platParMenu/:id", component:PlatParMenuComponent},
  {path:"corbeille", component:CorbeilleComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
