import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie-liste',
  templateUrl: './categorie-liste.page.html',
  styleUrls: ['./categorie-liste.page.scss'],
})
export class CategorieListePage implements OnInit {
  ID: any;
  menus: any;
  image: any;

  constructor(private service:ServicesService,public route:ActivatedRoute) { }

  ngOnInit() {
    

      this.image=this.service.urlImg
      
      this.ID = this.route.snapshot.params['id'];
      console.log(this.ID); 
  
      this.service.listePlatMenu(this.ID).subscribe(data =>{
        this.menus=data;
        console.log(this.menus);
        
        
      })
      
     
    
  }

}
