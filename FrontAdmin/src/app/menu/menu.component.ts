import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ModifiermenuComponent } from '../modifiermenu/modifiermenu.component';
import { ServiceService } from '../services/service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus :any;
  boiterecup: any;

  constructor(private s :ServiceService,
    public snackbar :MatSnackBar,
    private route:ActivatedRoute,
    public dialogue:MatDialog) { }

  ngOnInit(): void {
    this.listMenu();    
  }
  
  listMenu(){
    return this.s.listemenu().subscribe(data =>{
    this.menus=data;
    console.log(this.menus)
    })
  }

  supmenu(id_menu:any){
    return this.s.supprimermenu(id_menu).subscribe(data =>{
      this.snackbar.open('suppression','X', {
        duration: 3000
      });
      this.ngOnInit();
    })

  }

  menuparid(id_menu:any){
    return this.s.menuparid(id_menu).subscribe(donnees =>{
      this.boiterecup =donnees;
        console.log(this.boiterecup);
        this.dialogue.open(ModifiermenuComponent, {
        data: {
        route: this.boiterecup, 
      }
      });
    })
 

  }

  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer ce menu ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this. supmenu(id);
    swal.fire(
      'Supprimer!',
      'Le menu est supprimé avec succès.',
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

function ModifierMenuComponent(ModifierMenuComponent: any, arg1: { data: { route: any; }; }) {
  throw new Error('Function not implemented.');
}
