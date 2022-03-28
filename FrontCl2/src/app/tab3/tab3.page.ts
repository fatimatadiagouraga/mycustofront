import { Component ,OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModelPanier } from '../model-panier';



import { ServicesService } from '../Services/services.service';
import { Commande } from './commande.model';
import { PanierService } from './panier.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  client: any;
  panierList:any;
  image: any;
  commande: Commande = new Commande();
  panier: ModelPanier =new ModelPanier();
  quantite=1;
  

  constructor(private service:ServicesService,
    private toastController:ToastController) {}

  ngOnInit() {
    this.image=this.service.urlImg
    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client);
    this.panierclient();
    
    
    
  }
  ionViewWillEnter() {
    // todo
    this.panierclient();
    
}
  panierclient(){
     this.service.panierParClient(this.client.id_client).subscribe(datas =>{
      this.panierList=datas;
      this.commande.panierList= this.panierList
      
    })
  }


  ajoutCommande(){
    let a = JSON.stringify(this.commande);  
    return this.service.ajoutcommande(JSON.parse(a),this.client.id_client).subscribe(data =>{
      console.log(data);
     this.ngOnInit(); 
      
    })
    
    
  }

  supprimer(id_panier:any){
     
    this.service.supprimerPanier(id_panier).subscribe(() =>{
      // this.ngOnInit();

    })
  }

  update(id_panier:any,quantite:any,panier){
     
    quantite = quantite + 1
    this.service.updateQ(id_panier,quantite,panier).subscribe( data=>{
      console.log(data);
      this.panierclient();
    })
  }

  incremante(){
    
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
