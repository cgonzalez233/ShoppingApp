import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DataService } from 'src/app/data.service';
import { CartOrder } from 'src/app/models/cart-order';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  productInfo: any;
  proId: any;
  order: any;
  proCat: String;
  currentUser: any = this.globaluser.getMyGV();

  constructor(private dataService: DataService, private route: ActivatedRoute, private globaluser: AppService) {
    
   }

  ngOnInit(): void {
    this.proId = this.route.snapshot.paramMap.get("id")
    this.dataService.getProductById(this.proId).subscribe(data => {
      this.productInfo = data
    })

    console.log(this.globaluser.getMyGV())

  }

  addCart(itemName: string, itemPrice: number, image: string, userId: number){
    this.order = new CartOrder(itemName, itemPrice,image, userId);
    this.dataService.createOrder(this.order).subscribe()
    console.log(this.order)
  }

  cantAdd(){
    var button = document.getElementById('add');
    var element = document.createElement('h5');
    element.innerText = "Please Login";
    button.appendChild(element);
  }

  

}