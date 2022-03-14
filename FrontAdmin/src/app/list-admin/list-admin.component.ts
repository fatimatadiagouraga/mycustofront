import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModifierAdminComponent } from '../modifier-admin/modifier-admin.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {
  boiterecup: any;

  constructor(private s :ServicesService,
              public snackbar:MatSnackBar,
              public dialogue :MatDialog,
              private route:ActivatedRoute) { }
  administrateurs:any;
 

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

  btnmodif(btn:any){
  this.s.adminById(btn).subscribe(dataAdmin => {
      
  //boiterecup fonction qui permet de recuperer les données a modifier par id
  this.boiterecup =dataAdmin;
  this.dialogue.open(ModifierAdminComponent, {
  data: {
  route: this.boiterecup
      }
     });
  })
    

  }

}
