import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FrontAdmin';
  data: any;
  user: any;

  @ViewChild(MatSidenav) sidenav!:MatSidenav;
  constructor(private observer:BreakpointObserver){



  }
  ngOnInit(): void {
      this.data=localStorage.getItem('isLogin');
      this.user=JSON.parse(this.data)
      console.log(this.user);
      
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
    if (res.matches) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    }else{
      this.sidenav.mode = 'side';
      this.sidenav.open();

    }
    }
    
    );
  }
}







