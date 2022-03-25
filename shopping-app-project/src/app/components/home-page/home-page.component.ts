import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  guser:any;
  constructor(private globaluser: AppService) { 
  }
  getMyguser(){
    this.guser=this.globaluser.getMyGV;
    console.log(this.globaluser.myGlobalVar);
  }
  


  ngOnInit(): void {
  }

}
