import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ModifiermenuComponent } from '../modifiermenu/modifiermenu.component';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus :any;
  boiterecup: any;

  constructor(private s :ServiceService,public snackbar :MatSnackBar,private route:ActivatedRoute,public dialogue:MatDialog) { }

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
      this.dialogue.open(ModifiermenuComponent, {
      data: {
      route: this.boiterecup, 
    }
  });
})
 

}

}

function ModifierMenuComponent(ModifierMenuComponent: any, arg1: { data: { route: any; }; }) {
  throw new Error('Function not implemented.');
}
