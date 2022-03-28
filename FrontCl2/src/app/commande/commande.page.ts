import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  client: any;
  commandeLivrer:any;
  commandeEncours: any;
  valide: any;

  constructor(private service:ServicesService,
    private router:Router,
              public toastController: ToastController) { }

  ngOnInit() {
  

    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client);
    this.listCommandeClientEncours();
    this.listCommandeClient();
    

  }


//liste de commande livrée par client
  listCommandeClient(){
    this.service.listCommandeClient(this.client.id_client).subscribe(data =>{
       this.commandeLivrer=data
       console.log(this.commandeLivrer);
       
    })
  }


//liste de commande encours par client
listCommandeClientEncours(){
  this.service.listCommandeEncoursClient(this.client.id_client).subscribe(data =>{
     this.commandeEncours=data
     console.log(this.commandeEncours);
     
  })
}

valider(id_commande:any){
  this.service.validerCommande(id_commande).subscribe(data =>{
    this.valide=data
    this.presentToast('valider avec succes');
    this.ngOnInit();
  })
}

supprimer(id_commande:any){
  this.service.supprimerCommande(id_commande).subscribe(data =>{
    this.valide=data
    this.presentToast('supprimer avec succes');
    this.ngOnInit();
  })
}

async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 3000,
    position: 'top',
    color: 'warning'
  });
  toast.present();
}
}
