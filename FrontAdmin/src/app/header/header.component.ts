import { Component, OnInit, ViewChildren } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren(SidemenuComponent) sidenav!:SidemenuComponent;
  observer: any;
  res:any;

  constructor() { }

  ngOnInit(): void {
  }

  //  ngAfterViewInit(){
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res: { matches: any; })=>{
  //   if (res.matches) {
  //     this.sidenav.mode = 'over';
  //     this.sidenav.close();
  //   }else{
  //     this.sidenav.mode = 'side';
  //     this.sidenav.open();

  //   }
  //   }
    
  //   );
  // }

}


