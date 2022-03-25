import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  productInfo: any;
  proId: number = 15;
  relatedProducts: any[] = [];
  proCat: String;

  constructor(private dataService: DataService) {
    
   }

  ngOnInit(): void {
    this.dataService.getProductById(16).subscribe(data => {
      this.productInfo = data
    })
    this.proCat = "women's clothing"
    this.dataService.getProductsByCategoryRel(this.proCat).subscribe(data => {
      this.relatedProducts = data
      console.log(this.relatedProducts)
    })

  }

  

}