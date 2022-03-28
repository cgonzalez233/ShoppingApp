import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {User} from 'src/app/models/user'

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  constructor(private http: DataService) { 
    
  }
  public user: any;
  users: User[];
  public message: string;
  public username: string  = "";
  public email: string ="";
  public password: string = "";
  public address: string = "";
  public phone: string = "";
  addUser(){
      this.user = new User(this.username, this.password, this.email, this.address, this.phone)
      this.http.getUsers().subscribe(data=>this.users = data);
      this.users.forEach(user => {
      if(user.username === this.username || user.password === this.password){
        this.message = 'Repeat creds';
      }
      })
      if(this.message == 'Repeat creds'){ 
        alert(this.message)
        this.message = "";
      }
      else{
        this.http.createUser(this.user).subscribe(data=>this.user = data);
      }
  }

  ngOnInit(): void {
  }

}
