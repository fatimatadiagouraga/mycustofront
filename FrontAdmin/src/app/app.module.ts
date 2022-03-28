import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListadminComponent } from './listadmin/listadmin.component';

import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
import { AjoutadminComponent } from './ajoutadmin/ajoutadmin.component';
import { PlatComponent } from './plat/plat.component';
import { AjoutplatComponent } from './ajoutplat/ajoutplat.component';
import { ModifierplatComponent } from './modifierplat/modifierplat.component';
import { MenuComponent } from './menu/menu.component';
import { AjoutmenuComponent } from './ajoutmenu/ajoutmenu.component';
import { ModifiermenuComponent } from './modifiermenu/modifiermenu.component';
import { LoginComponent } from './login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { PlatParMenuComponent } from './plat-par-menu/plat-par-menu.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    SidemenuComponent,
    ListadminComponent,
    
    ModifieradminComponent,
         AjoutadminComponent,
         PlatComponent,
         AjoutplatComponent,
         ModifierplatComponent,
         MenuComponent,
         AjoutmenuComponent,
         ModifiermenuComponent,
         LoginComponent,
         CommandeComponent,
         PlatParMenuComponent,
         CorbeilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
