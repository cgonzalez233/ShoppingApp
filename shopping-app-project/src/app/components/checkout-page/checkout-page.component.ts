import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DataService } from 'src/app/data.service';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  userCart: any[]
  userId: number;
  cartTotal: number;
  purchased = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getProductsByCategory("electronics").subscribe(data => {
      this.userCart = data
    })
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.userCart.length; i++) {
      sum += this.userCart[i].price;
    }
    return sum;
  }

  purchase(){
    this.purchased = true;
    console.log("Hello")
  }

}
