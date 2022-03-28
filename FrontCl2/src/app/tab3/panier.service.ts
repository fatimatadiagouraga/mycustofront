import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from './../tab3/commande.model';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
   constructor(private http: HttpClient) { }

}
