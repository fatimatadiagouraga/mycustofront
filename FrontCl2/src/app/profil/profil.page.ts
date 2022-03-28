import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router} from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  client: any;
  loginData: any;

  constructor(private service : LoginService,
    public router:Router,
    public s:ServicesService,
    public toastController:ToastController )
     { }

  ngOnInit() {
    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client.id_client);
  }
    
  logOut(){
    localStorage.removeItem('Info');
  this.router.navigate(['/login']);
  }

  supprimer(id_client:any){
    this.s.supprimerCpte(this.client.id_client).subscribe(data =>{
      this.logOut();
      this.presentToast('supprimer avec succes');
      this.router.navigate(['/login']);

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



