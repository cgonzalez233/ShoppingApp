import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IProduct} from 'src/app/product'
import { Observable } from 'rxjs';

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
