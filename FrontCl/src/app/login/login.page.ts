import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  test: any;

  constructor(private service: LoginService,private router : Router ) { }

  ngOnInit() {

  }

  getLogin(form :NgForm){
    return this.service.getLoginSer(form.value["login"],form.value["motdepasse"]).subscribe(data=>{
      this.test = data
      if(data){
        console.log("connexion avec succes")
        localStorage.setItem('Info', JSON.stringify(this.test));
        this.router.navigate(["/tabs/tabs/tab1"])
      }
     console.log(this.test);
    }

    );
  }


}
