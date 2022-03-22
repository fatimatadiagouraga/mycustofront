import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifiermenu',
  templateUrl: './modifiermenu.component.html',
  styleUrls: ['./modifiermenu.component.scss']
})
export class ModifiermenuComponent implements OnInit {

  menu : any;
  constructor(@Inject(MAT_DIALOG_DATA) public menuC: any,private service:ServiceService,
  public snackbar:MatSnackBar,
  public dialogue:MatDialog) { }

  ngOnInit(): void {
   this.menu = this.menuC.route;
   console.log(this.menu)
    
  }

  modifmenu(menu:any){
    console.log("ok");
    
    return this.service.modifmenu(this.menu.id_menu , menu.value).subscribe(data =>{
      console.log(data);

      this.snackbar.open('Modifié avec succès','!!!', {
        duration: 3000
    });
      
    })
  }

  close(){
  this.dialogue.closeAll();
  }

}
