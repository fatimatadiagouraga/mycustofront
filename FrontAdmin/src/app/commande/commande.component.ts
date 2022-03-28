import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  data: any;
  user: any;
  loginStatus: any;
  commandes: any;
  Encours:any;
  livrer: any;

  constructor(private service:ServiceService,
    private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.liste();
    this.listeCommandeEncours();
    this.listeCommandeLivrer();
    this.data=localStorage.getItem('isLogin');
      this.user=JSON.parse(this.data)
      console.log(this.user);
      this.loginStatus = JSON.parse(localStorage['loginStatus']);
  }
//liste de commande en attente
  liste(){
    this.service.liste().subscribe(data =>{
      this.commandes= data;
      console.log(this.commandes);
      
    })

  }

//button mettre en cours commande
  encours(id_commande:any){
     this.service.CommandeEncours(id_commande).subscribe(data =>{
      this.snackbar.open('Encours','X', {
        duration: 3000
      });
        this.ngOnInit();
     })
  }

  listeCommandeEncours(){
    this.service.ListeCommandeEncours().subscribe(data =>{
      this.Encours= data;
      console.log(this.commandes);
      
    })

  }
  listeCommandeLivrer(){
    this.service.ListeCommandeLivrées().subscribe(data =>{
      this.livrer= data;
      console.log(this.commandes);
      
    })

  }

}
