import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient  ) { }

  getCategories():Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/categories');
  }

  getProducts():Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  getProductsByCategory(catStr: String):Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/category/' + catStr);
  }

  getProductById(proId: any):Observable<any>{
    return this.http.get<any>('https://fakestoreapi.com/products/' + proId);
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>('http://localhost:9000/users');
  }
  
}
