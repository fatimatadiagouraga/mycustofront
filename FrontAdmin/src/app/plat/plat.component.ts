import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifierPlatComponent } from '../modifier-plat/modifier-plat.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  constructor(
    private service : ServicesService,
    public dialog:MatDialog,
    private route : ActivatedRoute) { }

  listplat : any;
  boiterecup:any;

  image:any;

  ngOnInit(): void {
  
  this.listplats();
  this.image=this.service.apiimage;
  
  
  }


//fonction qui ouvre une boite de dialogue en cliquant sur licone modif
  btnmodif(btn:any){
    this.service.RecupererParId(btn).subscribe(data => {
      //boiterecup fonction qui permet de recuperer les données a modifier par id
      this.boiterecup =data;
      this.dialog.open(ModifierPlatComponent, {
        data: {
        route: this.boiterecup
        }
      });
    })
    

  }
//lister les plats globales
  listplats(){
    return this.service.ListePlat().subscribe(data => {
      this.listplat =data;
      console.log(this.listplat);
    });
  }

  SuppPlat(idplat:any){
    this.service.SupprimerPlat(idplat).subscribe(data =>{
      console.log(data);
      this.listplats();
      this.image=this.service.apiimage;
    }
   
    );
    
  }
}
