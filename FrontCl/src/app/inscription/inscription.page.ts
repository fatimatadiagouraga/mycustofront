import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  client:FormGroup
  constructor(private service:InscriptionService,
              private formB:FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.client = this.formB.group({
      nom:['',Validators.required],
      adresse:['',Validators.required],
      prenom:['',Validators.required],
      telephone:['',Validators.required],
      email:['',Validators.email],
      login:['',Validators.required],
      motdepasse:['',Validators.required],
    })
  }
InsCl(data:FormGroup){

  const a = JSON.stringify(data.value)
  console.log(JSON.parse(a));
  this.service.Inscription(JSON.parse(a)).subscribe((datas)=>{
    if(datas){
      this.router.navigateByUrl("/login")
    }
  })
}
}
