import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModifierplatComponent } from '../modifierplat/modifierplat.component';
import { ServiceService } from '../services/service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  constructor(private service : ServiceService,
    public dialog:MatDialog,
    private route : ActivatedRoute) { }

    listplat : any;
  boiterecup:any;

  image:any;

  term="";

  ngOnInit(): void {

    this.listplats();
  this.image=this.service.apiimage;
  }

  btnmodif(btn:any){
    this.service.RecupererParId(btn).subscribe(data => {
      //boiterecup fonction qui permet de recuperer les données a modifier par id
      this.boiterecup =data;
      this.dialog.open(ModifierplatComponent, {
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

  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer cet plat ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this. SuppPlat(id);
    swal.fire(
      'Supprimer!',
      'Plat est supprimé avec succès.',
      'warning'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) {
    swal.fire(
      'Annuler',
      'Vous avez annulé la suppression',
      'error'
    )
  }
    })
  }

}
