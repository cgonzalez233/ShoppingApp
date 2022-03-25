import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private globaluser: AppService) { }

  ngOnInit(): void {
  }

  logout(){
    this.globaluser.setMyGV(undefined);
    window.location.reload();
  }

}
