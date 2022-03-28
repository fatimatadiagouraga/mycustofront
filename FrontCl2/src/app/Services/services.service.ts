import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  urlImg='http://localhost:8080/mycustoapi/plat/imageplat/'
  apipanier:"http://localhost:8080/mycustoApi/panier/"
  apicommande:'http://localhost:8080/mycustoApi/commande/'
  MenuJour:'http://localhost:8080/mycustoapi/menu/'

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

  menuJour(){
    return this.http.get('http://localhost:8080/mycustoapi/menu/date');
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

deselectPlat(id_client:any,id_plat:any){
  return this.http.get('http://localhost:8080/mycustoApi/panier/deselect/'+id_client +'/'+ id_plat);
}

//liste des commandes livrées par client
listCommandeClient(id_client:any){
  return this.http.get('http://localhost:8080/mycustoApi/commande/listeCommandeClt/'+id_client);
}


//liste des commandes Encours par client
listCommandeEncoursClient(id_client:any){
  return this.http.get('http://localhost:8080/mycustoApi/commande/commandeEnCours/'+id_client);
}
//button valider commande
validerCommande(id_commande:any){
  return this.http.delete('http://localhost:8080/mycustoApi/commande/validerLivraison/'+id_commande);
}

//supprimerCommande par clt
supprimerCommande(id_commande:any){
  return this.http.delete('http://localhost:8080/mycustoApi/commande/supprimer/'+id_commande);
}


//supprimercompte
supprimerCpte(id_client){
  return this.http.delete('http://localhost:8080/mycustoApi/client/supprimerClient/'+id_client);
}



}
