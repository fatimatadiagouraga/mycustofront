import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-modifierplat',
  templateUrl: './modifierplat.component.html',
  styleUrls: ['./modifierplat.component.scss']
})
export class ModifierplatComponent implements OnInit {
  monPlat: FormGroup = new FormGroup({});
 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private formBuilder: FormBuilder,
   private service :ServiceService,
   public snackbar:MatSnackBar,
   public route:Router,
   public dialogue:MatDialog) { }

  ngOnInit(): void {

    // console.log(this.data);
    this.monPlat = this.formBuilder.group({
      // "id_plat": new FormControl(this.data.route.id_plat),
      "nom_plat": new FormControl(this.data.route.nom_plat),
      "prix_plat": new FormControl(this.data.route.prix_plat),
      "description": new FormControl(this.data.route.description),
      // "image": new FormControl(this.data.route.image)

    })

    
  }

  modifplat(){ 
   
    this.service.ModifPlat(this.data.route.id_plat,this.monPlat.value).subscribe(data =>{
     console.log(data);
     this.snackbar.open('Modifié avec succès','!!!', {
      duration: 3000

  });
  
   });
     this.data.reset();
     
     this.route.navigate(['/plat'])
  }

  close(){
    this.dialogue.closeAll();
    }
 


}

