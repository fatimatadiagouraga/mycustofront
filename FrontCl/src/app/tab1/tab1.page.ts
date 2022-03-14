import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { AccueilService } from './accueil.service';
import { ServicesService } from '../Services/services.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  liste: any;
  image: any;
  client: any;
  constructor(private service: AccueilService ,private services:ServicesService) {}
  ngOnInit() {
    this.listeplat();
    this.image=this.service.urlImg;
    //recuperer client connecter
    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client);
    
  }

  listeplat(){
    return this.service.getPlatSer().subscribe(data => {
      this.liste= data;
      console.log(this.liste[0].id_plat);
    });
  }
  ajouter(id_plat:any,platpanier:any){
    return this.services.ajoutpanier(id_plat,this.client.id_client,platpanier).subscribe(data =>{
      console.log(data);
    })
  }

}
