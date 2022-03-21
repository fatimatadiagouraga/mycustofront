import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  data: any;
  user: any;
  loginStatus: any;
  
  
  

  constructor( public route:Router) { }

  ngOnInit(): void {


    this.data=localStorage.getItem('isLogin');
    this.user=JSON.parse(this.data)
    console.log(this.user);
    this.loginStatus = JSON.parse(localStorage['loginStatus']);

    //deconnexion
    this.loginData = (localStorage["isLogin"]);
    console.log(this.loginData);
}
loginData(loginData: any) {
  throw new Error('Method not implemented.');
}


logOut(){
  localStorage.removeItem('isLogin');
this.route.navigate(['/login']);


}

  }


