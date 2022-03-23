import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {DataServiceService} from 'src/app/data-service.service';
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

  constructor(private _dataServ: DataServiceService, private route: ActivatedRoute) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('name');
    switch (this.category){
      case 'jewelery':
        this._dataServ.getPoductsJewlery().subscribe(data=>this.products = data);
        break;
      case 'electronics':
        this._dataServ.getPoductsElectronics().subscribe(data=>this.products = data);
        break;
        case 'mens clothing':
        this._dataServ.getPoductsMensCloth().subscribe(data=>this.products = data);
        break;
        case 'womens clothing':
        this._dataServ.getPoductsWomensCloth().subscribe(data=>this.products = data);
        break;
      default:
        this._dataServ.getAllProducts().subscribe(data=> this.products = data);
        break;
    }
  }

  categoryBind(cat: string){
   // this.messageHolder.next(cat);
   switch (cat){
    case 'jewelery':
      this._dataServ.getPoductsJewlery().subscribe(data=>this.products = data);
      break;
    case 'electronics':
      this._dataServ.getPoductsElectronics().subscribe(data=>this.products = data);
      break;
      case 'mens clothing':
      this._dataServ.getPoductsMensCloth().subscribe(data=>this.products = data);
      break;
      case 'womens clothing':
      this._dataServ.getPoductsWomensCloth().subscribe(data=>this.products = data);
      break;
    default:
      this._dataServ.getAllProducts().subscribe(data=> this.products = data);
      break;
  }
  }

 

}
