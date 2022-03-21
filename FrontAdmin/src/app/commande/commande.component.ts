import { Component, OnInit } from '@angular/core';
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

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.liste();
    this.data=localStorage.getItem('isLogin');
      this.user=JSON.parse(this.data)
      console.log(this.user);
      this.loginStatus = JSON.parse(localStorage['loginStatus']);
  }

  liste(){
    this.service.liste().subscribe(data =>{
      this.commandes= data;
      console.log(this.commandes);
      
    })

  }

}
