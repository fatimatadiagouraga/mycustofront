import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServicesService } from '../Services/services.service';
import { Commande } from '../tab3/commande.model';

@Component({
  selector: 'app-valider-commande',
  templateUrl: './valider-commande.page.html',
  styleUrls: ['./valider-commande.page.scss'],
})
export class ValiderCommandePage implements OnInit {
  client: any;
  panierList:any;
  commande: Commande = new Commande();

  constructor(public toastController: ToastController, public service : ServicesService) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'PAYEMENT EFFECTUE AVEC SUCCES',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.client= JSON.parse(localStorage.getItem('Info'));
    this.panierclient();
  }

  panierclient(){
    this.service.panierParClient(this.client.id_client).subscribe(datas =>{
     this.panierList=datas;
     this.commande.panierList= this.panierList
     console.log(datas);
     
   })
 }

  ajoutCommande(){
    let a = JSON.stringify(this.commande);  
    return this.service.ajoutcommande(JSON.parse(a),this.client.id_client).subscribe(data =>{
      this.presentToast()
      console.log(data);   
    })
  }
}
