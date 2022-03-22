import { Component, OnInit,Inject } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService } from '../services/service.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifieradmin',
  templateUrl: './modifieradmin.component.html',
  styleUrls: ['./modifieradmin.component.scss']
})
export class ModifieradminComponent implements OnInit {
  adminAmodif: FormGroup = new FormGroup({});

  constructor(@Inject(MAT_DIALOG_DATA) public admind: any,
  private formBuilder: FormBuilder,
  private service :ServiceService,
  public snackbar:MatSnackBar,
  public route:Router,
  private dialogue:MatDialog) { }

  ngOnInit(): void {
    this.modifAdmin();

    this.adminAmodif = this.formBuilder.group({
    
      "nom": new FormControl(this.admind.route.nom),
      "prenom": new FormControl(this.admind.route.prenom),
      "description": new FormControl(this.admind.route.description),
      "adresse": new FormControl(this.admind.route.adresse),
      "email": new FormControl(this.admind.route.email),
      "telephone": new FormControl(this.admind.route.telephone),
      "genre": new FormControl(this.admind.route.genre),
      "login": new FormControl(this.admind.route.login),
      "profil": new FormControl(this.admind.route.profil)
    })
  }

  modifAdmin(){
    this.service.ModifAdmin(this.adminAmodif.value,this.admind.route.id_admin).subscribe((data) => {
    //   this.snackbar.open('Modifier avec succès','!!!', {
    //     duration: 3000
  
    // });
    if (data===null) {
      this.snackbar.open('non',' !!!', {
        duration: 3000
      });
     } else {
      this.snackbar.open('Modifier avec succès',' !!!', {
        duration: 3000
        
       });
       
    this.adminAmodif.reset();
    this.route.navigate(['/listAdmin'])

  }
  })
  }   

  close(){
    this.dialogue.closeAll();
    }

}
