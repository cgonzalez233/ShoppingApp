import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  productInfo: any;
  proId: any;
  relatedProducts: any[] = [];
  proCat: String;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.proId = this.route.snapshot.paramMap.get("id")
    this.dataService.getProductById(this.proId).subscribe(data => {
      this.productInfo = data
    })

  }

  

}