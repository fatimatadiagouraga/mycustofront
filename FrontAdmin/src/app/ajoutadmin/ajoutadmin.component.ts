import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-ajoutadmin',
  templateUrl: './ajoutadmin.component.html',
  styleUrls: ['./ajoutadmin.component.scss']
})
export class AjoutadminComponent implements OnInit {

  constructor(private Service :ServiceService,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  AjoutAdmin(dataAdmin : NgForm){
    this.Service.AjouterAdmin(dataAdmin.value).subscribe(data =>{
     console.log(dataAdmin);
     this.snackbar.open('Ajouter avec succès',' !!!', {
      duration: 3000

  });
  
 

    })
     dataAdmin.reset();

  }

}
