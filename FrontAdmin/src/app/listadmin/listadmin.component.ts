import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ModifieradminComponent } from '../modifieradmin/modifieradmin.component';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.scss']
})
export class ListadminComponent implements OnInit {
  administrateurs: any;
  boiterecup: any;

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
  }


