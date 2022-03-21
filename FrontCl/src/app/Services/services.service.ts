import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  urlImg='http://localhost:8080/mycustoapi/plat/imageplat/'
  apipanier:"http://localhost:8080/mycustoApi/panier/"
  apicommande:'http://localhost:8080/mycustoApi/commande/'

  constructor(private http:HttpClient) { }

  ajoutpanier(id_plat:any,id_client:any,platpanier:any){
    return this.http.post('http://localhost:8080/mycustoApi/panier/'+'ajouterPanier/'+id_plat+'/'+id_client,platpanier)
  }

  panierParClient(id_client:any){
    return this.http.get('http://localhost:8080/mycustoApi/panier/'+'panierClient/'+id_client);
  }

  //ajoutercommande
  ajoutcommande(commandes:any, id_client:any){
    return this.http.post('http://localhost:8080/mycustoApi/commande/ajouterCommande/'+id_client,commandes);
  }

  //supprimerPanier
  supprimerPanier(id_panier: any){
 return this.http.delete('http://localhost:8080/mycustoApi/panier/suppPanier/'+ id_panier);
}


  listeMenu(){
    return this.http.get('http://localhost:8080/mycustoapi/menu/listeMenu');
  }

listePlatMenu(id_menu:any){
  return this.http.get('http://localhost:8080/mycustoapi/plat/listParMenu/'+id_menu);
}
clientById(id:any){
  return this.http.get('http://localhost:8080/mycustoApi/client/clientById/'+ id);
}

modifierClt(id:any,clients:any){
  return this.http.put('http://localhost:8080/mycustoApi/client/modifierClient/'+id,clients);
}

//quantite de plat commandé 

updateQ(id_panier:any,quantite:any,panier:any){
return this.http.put('http://localhost:8080/mycustoApi/panier/updateQ/'+id_panier+'/'+quantite,panier);
}

}
