import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  client: any;

  constructor(private service : LoginService) { }

  ngOnInit() {
    this.client= JSON.parse(localStorage.getItem('Info'));
    console.log(this.client.id_client);
  }

}
