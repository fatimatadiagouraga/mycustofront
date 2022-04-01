import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-ajoutmenu',
  templateUrl: './ajoutmenu.component.html',
  styleUrls: ['./ajoutmenu.component.scss']
})
export class AjoutmenuComponent implements OnInit {

 
  constructor(private s:ServiceService,public snackbar:MatSnackBar,public route:Router) { }

  ngOnInit(): void {
  }

  ajoutmenu(datamenus: NgForm){
    //console.log(dataplat.value);
    this.s.ajoutermenu(datamenus.value).subscribe(data =>{
     
      this.snackbar.open('Ajouter avec succès','!!!', {
        duration: 3000
  
    });
    })
    datamenus.reset();
    this.ngOnInit();
    this.route.navigate(['/menu'])

  }
}