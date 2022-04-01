import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ModifieradminComponent } from '../modifieradmin/modifieradmin.component';
import { ServiceService } from '../services/service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.scss']
})
export class ListadminComponent implements OnInit {
  administrateurs: any;
  boiterecup: any;
  term=''

  constructor(private s :ServiceService,
    public snackbar:MatSnackBar,
    public dialogue :MatDialog,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.listAdmin();
  }
  listAdmin(){
    return this.s.ListeAdmin().subscribe(data => {
      this.administrateurs =data;
     
    });
  }

  SuppAdmin(idadmin:any){
    this.s.SupprimerAdmin(idadmin).subscribe(data =>{
     
      this.snackbar.open('suppression','X', {
                  duration: 3000
                });
      this.ngOnInit();
      
    }
    );
    
  }
  


  //modification

  btnmodif(btn:any){
  this.s.adminById(btn).subscribe(dataAdmin => {
      
  //boiterecup fonction qui permet de recuperer les données a modifier par id
  this.boiterecup =dataAdmin;
  this.dialogue.open(ModifieradminComponent, {
  data: {
  route: this.boiterecup
      }
     });
  })
    

  }

  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer cet admin ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this. SuppAdmin(id);
    swal.fire(
      'Supprimer!',
      'Admin est supprimé avec succès.',
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


