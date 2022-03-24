import { Component, OnInit } from '@angular/core';
import {DataServiceService} from 'src/app/data-service.service'
import { IProduct } from 'src/app/product';
import {CategoryComponent}from 'src/app/components/category/category.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<IProduct>;
  constructor(private _dataServ: DataServiceService){
      this.products = [];  
   }


  ngOnInit(){
    //this._dataServ.getAllProducts().subscribe(data=> this.products = data);
    // switch (){
    //   case 'jewelery':
    //     this._dataServ.getPoductsJewlery().subscribe(data=>this.products = data);
    //     break;
    //   case 'electronics':
    //     this._dataServ.getPoductsWomensCloth().subscribe(data=>this.products = data);
    //     break;
    //     case 'mens clothing':
    //     this._dataServ.getPoductsMensCloth().subscribe(data=>this.products = data);
    //     break;
    //     case 'womens clothing':
    //     this._dataServ.getPoductsElectronics().subscribe(data=>this.products = data);
    //     break;
    //   default:
    //     this._dataServ.getAllProducts().subscribe(data=> this.products = data);
    //     break;
    // }
  }

}
