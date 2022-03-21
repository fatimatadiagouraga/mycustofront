import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  client: any;
  loginData: any;

  constructor(private service : LoginService,public router:Router) { }

  ngOnInit() {
    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client.id_client);
  }
    
  logOut(){
    localStorage.removeItem('Info');
  this.router.navigate(['/login']);
  }

}



