import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
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
    this.http.getUsers().subscribe(data=>this.users=data)
  }
  login(username: string, password: string){
    console.log(this.globaluser.getMyGV())
    this.users.forEach(user => {
      if(user.username === username && user.password === password){
        this.welcome="you are now signed in "+username;
        this.globaluser.setMyGV(user);
      }
      })
      
      if(this.globaluser.getMyGV() == undefined){
        this.welcome = "Bad Credentials"
      }
    
  }
  

}
