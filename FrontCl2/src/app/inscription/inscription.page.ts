import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {



  client:FormGroup
  constructor(private service:InscriptionService,
              private router:Router,
              public toastController: ToastController) { }

  ngOnInit() {
    
    
  }
InsCl( client: NgForm){

  this.service.Inscription(client.value).subscribe((datas)=>{
    if(datas){
      this.router.navigateByUrl("/login")
    }else{
      this.presentToast('login existant ou champs mal renseigner');
    }
  })
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
