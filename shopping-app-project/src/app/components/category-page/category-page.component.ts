import { Component, OnInit } from '@angular/core';
import{DataServiceService} from 'src/app/data-service.service'
import{ICategories}from 'src/app/components/category-page/CategoryC'

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
 
  public categories: String[];
  public images: String[];
  constructor(private http: DataServiceService) {
    this.categories = [];
    this.images = ['https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg','https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg','https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg']
   }

  ngOnInit(): void {
    this.http.getAllCategories().subscribe(data=>this.categories = data)
  }
  catPass(category: string){

  }

}
