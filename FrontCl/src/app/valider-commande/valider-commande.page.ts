import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-valider-commande',
  templateUrl: './valider-commande.page.html',
  styleUrls: ['./valider-commande.page.scss'],
})
export class ValiderCommandePage implements OnInit {

  constructor(public toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'PAYEMENT EFFECTUE AVEC SUCCES',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
