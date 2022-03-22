import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajoutadmin',
  templateUrl: './ajoutadmin.component.html',
  styleUrls: ['./ajoutadmin.component.scss']
})
export class AjoutadminComponent implements OnInit {

  constructor(private Service :ServiceService,public snackbar:MatSnackBar,private route: Router) { }

  ngOnInit(): void {
      

  }
  AjoutAdmin(dataAdmin : NgForm){
    this.Service.AjouterAdmin(dataAdmin.value).subscribe(data =>{
     console.log(dataAdmin);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       dataAdmin.reset();
       this.route.navigate(['/listAdmin'])
     } else {
      this.snackbar.open('non',' !!!', {
        duration: 3000
       });
       
     }
     
  
 

    })
    

  }

}
