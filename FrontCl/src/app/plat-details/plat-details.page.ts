import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientsListeService } from './Service/ingredients-liste.service';

@Component({
  selector: 'app-plat-details',
  templateUrl: './plat-details.page.html',
  styleUrls: ['./plat-details.page.scss'],
})
export class PlatDetailsPage implements OnInit {
  test: any;
  ID : number;
  Plat: any;
  image:any;

  constructor(private service: IngredientsListeService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.image=this.service.urlimage
    
    this.ID = this.route.snapshot.params['id'];
    console.log(this.ID); 

    this.service.getById(this.ID).subscribe(data =>{

      const a = JSON.stringify(data)
      this.Plat = JSON.parse(a);
      console.log(this.Plat.prix_plat);
      
    })
    
   
  }
  
}
