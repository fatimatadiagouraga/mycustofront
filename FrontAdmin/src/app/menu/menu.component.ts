import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModifierMenuComponent } from '../modifier-menu/modifier-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus :any;
  boiterecup: any;

  constructor(private s :ServicesService,public snackbar :MatSnackBar,private route:ActivatedRoute,public dialogue:MatDialog) { }

  ngOnInit(): void {
    this.listMenu();    
  }
  
  listMenu(){
    return this.s.listemenu().subscribe(data =>{
    this.menus=data;
    console.log(this.menus)
    })
  }
  supmenu(id_menu:any){
    return this.s.supprimermenu(id_menu).subscribe(data =>{
      this.snackbar.open('suppression','X', {
        duration: 3000
      });
      this.ngOnInit();
    })

  }

  menuparid(id_menu:any){
    return this.s.menuparid(id_menu).subscribe(donnees =>{
      this.boiterecup =donnees;
      console.log(this.boiterecup);
      this.dialogue.open(ModifierMenuComponent, {
      data: {
      route: this.boiterecup, 
    }
  });
})
 

}

}
