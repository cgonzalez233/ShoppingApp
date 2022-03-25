import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {DataService} from 'src/app/data.service';
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

  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category)
    if(this.category == null){
      this.dataService.getProducts().subscribe(data => 
        this.products = data)
    }else{
      this.dataService.getProductsByCategory(this.category).subscribe(data => 
        this.products = data)
    }
  }

  categoryBind(cat: string){
   // this.messageHolder.next(cat);
   this.dataService.getProductsByCategory(cat).subscribe(data=>this.products = data);
  }

 

}
