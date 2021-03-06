import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },

  // {
  //   path: 'profil',
  //   loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'plat-details/:id',
    loadChildren: () => import('./plat-details/plat-details.module').then( m => m.PlatDetailsPageModule)
  },
  {
    path: 'modifier-info-client/:id',
    loadChildren: () => import('./modifier-info-client/modifier-info-client.module').then( m => m.ModifierInfoClientPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'valider-commande',
    loadChildren: () => import('./valider-commande/valider-commande.module').then( m => m.ValiderCommandePageModule)
  },

  {
    path: 'categorie-liste/:id',
    loadChildren: () => import('./categorie-liste/categorie-liste.module').then( m => m.CategorieListePageModule)
  },
  // {
  //   path: 'commande',
  //   loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  // }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
