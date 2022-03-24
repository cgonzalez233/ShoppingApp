import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IProduct} from 'src/app/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<String[]>{
    return this.http.get<String[]>('https://fakestoreapi.com/products/categories')
  }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
  }
  getPoductsMensCloth(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products/category/men's clothing");
  }
  getPoductsWomensCloth(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products/category/women's clothing");
  }
  getPoductsJewlery(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products/category/jewelery');
  }
  getPoductsElectronics(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products/category/electronics');
  }
}
