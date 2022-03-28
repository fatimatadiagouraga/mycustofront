import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-modifier-info-client',
  templateUrl: './modifier-info-client.page.html',
  styleUrls: ['./modifier-info-client.page.scss'],
})
export class ModifierInfoClientPage implements OnInit {
  IdClient: any;
  client:any;

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private service : ServicesService,
    public toastController: ToastController
  ) { }

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
      this.presentToast('Effectué avec succès');
    })
    this.router.navigate(['tabs/profil/profil']);
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


  Navig(){
    this.router.navigate(['tabs/tabs/profil'])
    console.log('ok---------------');

  }
}
