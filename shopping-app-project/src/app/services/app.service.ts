import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService{
    myGlobalVar: any;

    setMyGV(val: any){
      this.myGlobalVar = val;
    }

    getMyGV(){
      return this.myGlobalVar;
    }
}
