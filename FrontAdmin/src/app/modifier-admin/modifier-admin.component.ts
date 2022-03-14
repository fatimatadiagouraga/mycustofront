import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.scss']
})
export class ModifierAdminComponent implements OnInit {
  adminAmodif: FormGroup = new FormGroup({});

  constructor(@Inject(MAT_DIALOG_DATA) public admind: any,
   private formBuilder: FormBuilder,
   private service :ServicesService,
   public snackbar:MatSnackBar) { }

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
      this.snackbar.open('ok succès','X', {
        duration: 3000
  
    });
    })
    this.adminAmodif.reset();
  }   
    

}
