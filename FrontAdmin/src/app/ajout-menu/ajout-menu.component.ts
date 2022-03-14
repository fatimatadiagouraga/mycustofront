import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajout-menu',
  templateUrl: './ajout-menu.component.html',
  styleUrls: ['./ajout-menu.component.scss']
})
export class AjoutMenuComponent implements OnInit {
 

  constructor(private s:ServicesService,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  ajoutmenu(datamenus: NgForm){
    //console.log(dataplat.value);
    this.s.ajoutermenu(datamenus.value).subscribe(data =>{
     
      this.snackbar.open('ok succès','X', {
        duration: 3000
  
    });
    })
    datamenus.reset();

}}
