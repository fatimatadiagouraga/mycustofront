import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../Services/services.service';




@Component({
  selector: 'app-modifier-info-client',
  templateUrl: './modifier-info-client.page.html',
  styleUrls: ['./modifier-info-client.page.scss'],
})
export class ModifierInfoClientPage implements OnInit {
  IdClient: any;
  client:any;

  constructor(private route : ActivatedRoute,private service : ServicesService) { }

  ngOnInit() {
    this.IdClient=this.route.snapshot.params['id'];
    console.log('ffffffffffffffffffffffffffffffff',this.IdClient);
     this.service.clientById(this.IdClient).subscribe(data =>{
      this.client=data;
      console.log(this.client);
      
    })

  }

  modifierClt(update:NgForm){
    this.service.modifierClt(this.client.id_client, update).subscribe(data =>{
      console.log('okkkkk',data);
      
    })
  }
  

}
