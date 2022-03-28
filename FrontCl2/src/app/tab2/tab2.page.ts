import { Component } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
  };
  listes: any;
  menus: any;
  image: any;
  constructor(private service:ServicesService) {}
  ngOnInit(){
    this.list();
    this.image=this.service.urlImg

  }
list(){
  return this.service.listeMenu().subscribe(data =>{
   this.listes=data
   console.log(this.listes);
   

  })
}
listPlatMenu(id_menu:any){
  return this.service.listePlatMenu(id_menu).subscribe(data=>{
    this.menus=data
    console.log(data);
    

  })
}

}
