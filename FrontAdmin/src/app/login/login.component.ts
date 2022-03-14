import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo:any;
  constructor(private service:ServicesService,public route:Router,public snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  onLogin(form :NgForm){
    this.service.login1(form.value["login"],form.value["motdepasse"],form.value).subscribe((res)=>{
      if(res){

        
        this.loginInfo = res;
        let loginStatus = true

        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
        location.replace("/commande");
      }
          else{
        this.snack.open('erreur','X', {
          duration: 3000
        });
            this.route.navigate(["/"])
            let loginStatus = false;
            localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
            console.log("login non connecter");
          
            
          } 
        
        }, 
        
        )
      }
    
  }
  
