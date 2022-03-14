import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.scss']
})
export class AjoutAdminComponent implements OnInit {
  
  

  constructor(private Service :ServicesService,public snackbar:MatSnackBar) { }
  

  ngOnInit(): void {
  }

  AjoutAdmin(dataAdmin : NgForm){
    this.Service.AjouterAdmin(dataAdmin.value).subscribe(data =>{
     console.log(dataAdmin);
     this.snackbar.open('ok succès','X', {
      duration: 3000

  });
  
 

    })
     dataAdmin.reset();

  }

}
