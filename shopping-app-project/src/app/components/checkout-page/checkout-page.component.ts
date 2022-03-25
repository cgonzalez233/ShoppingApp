import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { AppService } from 'src/app/app.service';
import { DataService } from 'src/app/data.service';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  userCart: any[] = [];
  userId: number;
  cartTotal: number;
  purchased = false;
  currentUser: any = this.globaluser.getMyGV();

  constructor(private dataService: DataService, private globaluser: AppService) { }

  ngOnInit(): void {

    this.dataService.getCartByUserId(this.currentUser.userId).subscribe(data => {
      this.userCart = data
    })

    console.log(this.globaluser)
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.userCart.length; i++) {
      sum += this.userCart[i].itemPrice;
    }
    return sum;
  }

  purchase(){
    this.purchased = true;
    this.userCart.forEach(cart =>{
      this.dataService.updateOrder(cart.orderId, cart).subscribe();
    }
    )
  }

}
