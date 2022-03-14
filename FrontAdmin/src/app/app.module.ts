import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommandeComponent } from './commande/commande.component';
import { MatCardModule } from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PlatComponent } from './plat/plat.component';
import { MenuComponent } from './menu/menu.component';
import { AjoutPlatComponent } from './ajout-plat/ajout-plat.component';
import { ModifierPlatComponent } from './modifier-plat/modifier-plat.component';
import { SupprimerPlatComponent } from './supprimer-plat/supprimer-plat.component';
import { AjoutMenuComponent } from './ajout-menu/ajout-menu.component';
import { ModifierMenuComponent } from './modifier-menu/modifier-menu.component';
import { SupprimerMenuComponent } from './supprimer-menu/supprimer-menu.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    LoginComponent,
    ToolbarComponent,
    PlatComponent,
    MenuComponent,
    AjoutPlatComponent,
    ModifierPlatComponent,
    SupprimerPlatComponent,
    AjoutMenuComponent,
    ModifierMenuComponent,
    SupprimerMenuComponent,
    AjoutAdminComponent,
    ListAdminComponent,
    ModifierAdminComponent,
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
    MatFormFieldModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
