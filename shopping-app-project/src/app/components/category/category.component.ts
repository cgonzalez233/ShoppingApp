import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, throwIfEmpty} from 'rxjs';
import { AppService } from 'src/app/data-service.service';
import { DataService } from 'src/app/data.service';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public products: Array<IProduct>;
  //private messageHolder = new BehaviorSubject<string>('');
  //currentMessage = this.messageHolder.asObservable()
  category: any;
  
  constructor(private _dataServ: DataService, private route: ActivatedRoute, private gtest: AppService) { 
    this.products = [];
  }
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    if(!this.category){
      this.dataService.getProducts().subscribe(data => 
        this.products = data)
    }else{
      this.dataService.getProductsByCategory(this.category).subscribe(data => 
        this.products = data)
    }
  }

  categoryBind(cat: string){
    this._dataServ.getProductsByCategory(cat).subscribe(data=>this.products=data);
  }
  servicetest(change: boolean){
    this.gtest.setMyGV(change);
    this.gtest.getMyGV
  }

 

}
