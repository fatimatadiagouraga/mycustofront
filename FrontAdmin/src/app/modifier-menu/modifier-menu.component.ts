import { Component, OnInit ,Inject} from '@angular/core';
import { ServicesService } from '../services.service';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modifier-menu',
  templateUrl: './modifier-menu.component.html',
  styleUrls: ['./modifier-menu.component.scss']
})
export class ModifierMenuComponent implements OnInit {

  menu : any;
  constructor(@Inject(MAT_DIALOG_DATA) public menuC: any,private service:ServicesService) { }

  ngOnInit(): void {
   this.menu = this.menuC.route;
   console.log(this.menu)
    
  }

  modifmenu(menu:any){
    console.log("ok");
    
    return this.service.modifmenu(this.menu.id_menu , menu.value).subscribe(data =>{
      console.log(data);
      
    })
  }

}
