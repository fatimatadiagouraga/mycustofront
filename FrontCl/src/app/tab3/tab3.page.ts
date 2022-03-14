import { Component ,OnInit } from '@angular/core';

import { ServicesService } from '../Services/services.service';
import { Commande } from './commande.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  client: any;
  panierList: any;
  image: any;
  commande: Commande = new Commande();

  

  constructor(private service:ServicesService) {}

  ngOnInit() {
    this.image=this.service.urlImg
    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client);
    this.panierclient()
    
  }

  panierclient(){
    return this.service.panierParClient(this.client.id_client).subscribe(datas =>{
      this.panierList=datas;
      this.commande.panierList= this.panierList
      console.log(this.panierList);
    })
  }

  check(event){    
    console.log(event.target.checked);
  
  }

  ajoutCommande(){
    let a = JSON.stringify(this.commande);
    console.log(JSON.parse(a));
    
    return this.service.ajoutcommande(JSON.parse(a),this.client.id_client).subscribe(data =>{
      console.log(data);
      
    })
    
  }

}
