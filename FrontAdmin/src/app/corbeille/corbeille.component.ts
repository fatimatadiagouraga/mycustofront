import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  menus: any;
  plats: any;
  admins: any;
  data: any;
  user: any;
  loginStatus: any;
  image:any;

  constructor(private service:ServiceService,
              private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  this.image=this.service.apiimage

    this.data=localStorage.getItem('isLogin');
    this.user=JSON.parse(this.data)
    console.log(this.user);
    this.loginStatus = JSON.parse(localStorage['loginStatus']);

    this.corbeilleMenu();
    this.corbeillePlat();
    this.corbeilleAdmin();
  }

  corbeilleMenu(){
    this.service.corbeMenu().subscribe(data =>{
      this.menus=data;
      
      
    })
  }

  corbeillePlat(){
    this.service.corbePlat().subscribe(data =>{
      this.plats=data;
     
      
    })
  }

  corbeilleAdmin(){
    this.service.corbeAdmin().subscribe(data =>{
      this.admins=data;
      
      
    })
  }

  //restaure
  restaureMenu(id_menu:any){
    this.service.restaureMenu(id_menu).subscribe(data =>{
      this.snackbar.open('restaurer','X', {
        duration: 3000
      });
this.ngOnInit();
      this.menus=data;
      
      
    })
  }

  restaurePlat(id_plat:any){
    this.service.restaurePlat(id_plat).subscribe(data =>{
      this.snackbar.open('restaurer','X', {
        duration: 3000
      });
this.ngOnInit();
      this.plats=data;
     
      
    })
  }

  restaureAdmin(id_admin:any){
    this.service.restaureAdmin(id_admin).subscribe(data =>{

      this.snackbar.open('restaurer','X', {
        duration: 3000
      });
this.ngOnInit();
      this.admins=data;
      
      
    })
  }
  

}
