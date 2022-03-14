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




}
