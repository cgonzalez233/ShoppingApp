import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from './models/iorder';
import { IUser } from './models/iuser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient  ) { }

// FakeStore API

  getCategories():Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/categories');
  }

  getProducts():Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  getProductsByCategory(catStr: any):Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/category/' + catStr)
  }

  getProductById(proId: any):Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/' + proId)
  }

  getProductsByCategoryRel(catStr: any):Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/category/' + catStr + "?limit=4")
  }

// Spring Boot Orders API
  getOrders():Observable<any>{
    return this.http.get<any>('http://localhost:9000/orders');
  }

  getOrderById(ordId: any): Observable<any>{
    return this.http.get('http://localhost:9000/orders/' + ordId)
  }

  createOrder(order: IOrder): Observable<IOrder>{
    return this.http.post<IOrder>('http://localhost:9000/orders', order)
  }

  updateOrder(id: number, order: IOrder): Observable<IOrder>{
    return this.http.put<IOrder>('http://localhost:9000/orders/' + id, order)
  }

  deleteOrder(id: number): Observable<any>{
    return this.http.delete('http://localhost:9000/orders/' + id)
  }

//Spring Boot User API

getUsers():Observable<any>{
  return this.http.get<any>('http://localhost:9000/users');
}

getUserById(id: number): Observable<any>{
  return this.http.get('http://localhost:9000/users/' + id)
}

getOrdersbyUserId(id: number): Observable<any>{
  return this.http.get('http://localhost:9000/user/' + id + '/orders')
}

getUserCart(id: number): Observable<any>{
  return this.http.get('http://localhost:9000/user/' + id + '/cart')
}

createUser(user: IUser): Observable<IUser>{
  return this.http.post<IUser>('http://localhost:9000/users', user)
}

updateUser(id: number, user: IUser): Observable<IUser>{
  return this.http.put<IUser>('http://localhost:9000/users/' + id, user)
}

deleteUser(id: number): Observable<any>{
  return this.http.delete('http://localhost:9000/users/' + id)
}

  
}
