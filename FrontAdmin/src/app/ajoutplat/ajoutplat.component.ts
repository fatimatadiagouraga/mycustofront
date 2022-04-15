import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-ajoutplat',
  templateUrl: './ajoutplat.component.html',
  styleUrls: ['./ajoutplat.component.scss']
})
export class AjoutplatComponent implements OnInit {
  nom_plat:any;
  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;

  //list menu
  lmenu:any;
  menus:any;
  md: any;
  platr: any;

  constructor(private service :ServiceService,
     private snackbar: MatSnackBar,
     public route:Router,
     public dialogue:MatDialog) { }

  ngOnInit(): void {

    this.listemenu();
  }

  lirephoto(file: any){
    this.photo = file
  }
  

  ajoutPlat(dataplat: NgForm){
    //console.log(dataplat.value);
    this.service.AjoutPlat(dataplat,this.photo[0]).subscribe((data: any) =>{
    data.nom_plat = dataplat.value['nom_plat']
    data.description = dataplat.value['description']
    data.prix_plat = dataplat.value['prix_plat']
    data.ingredients = dataplat.value['ingredients']
    this.platr = data
  //  console.log(dataplat.value.menu);
    this.service.menuparid(dataplat.value.menu).subscribe(data =>{
      this.md = data;
      this.platr.menu = this.md;

     
      
      this.service.ModifPlat(this.platr.id_plat, this.platr).subscribe((dt:any) =>{  
        console.log('tttttttttttttttttttttttttttttt',dt);
        this.snackbar.open('Ajouter avec succès','!!!', {
               duration: 3000
           });

           dataplat.reset();
            //window.location.reload();

           this.route.navigateByUrl('plat',{skipLocationChange:true}).then(()=>
           this.route.navigate(['/plat']));
  
        })
               



    })
    
    
      
    })
   
  }

  listemenu(){
    this.service.listemenu().subscribe( lmenu =>{
      this.menus=lmenu;
      console.log(this.menus)

    })
  }

  

}
