import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plat-par-menu',
  templateUrl: './plat-par-menu.component.html',
  styleUrls: ['./plat-par-menu.component.scss']
})
export class PlatParMenuComponent implements OnInit {
  ID: any;
  menus: any;
  image:any;

  constructor(private service :ServiceService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.image=this.service.apiimage;
     
    this.ID = this.route.snapshot.params['id'];
    console.log(this.ID); 

    this.service.listePlatMenu(this.ID).subscribe(data =>{
      this.menus=data;
      console.log(this.menus);
      
      
    })
    
   
  }

}
