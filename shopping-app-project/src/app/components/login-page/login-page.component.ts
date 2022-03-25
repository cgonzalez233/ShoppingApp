import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/data-service.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http: DataService, private globaluser: AppService) { }
  users: any[];
  welcome: string = "";
  uname: string= "";
  pword: string="";


  ngOnInit(): void {
    this.http.getAllUsers().subscribe(data=>this.users=data)
  }
  login(username: string, password: string){
    this.users.forEach(user => {
      if(user.username === username && user.password === password){
        this.welcome="you are now signed in "+username;
        this.globaluser.setMyGV(user);
      }else{
        this.welcome="Bad Credentials";
      }
      })
    
    
  }
  

}
