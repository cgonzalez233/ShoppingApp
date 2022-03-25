import { Component, OnInit } from '@angular/core';
import{DataService} from 'src/app/data.service'
import{ICategories}from 'src/app/components/category-page/CategoryC'
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
 
  public categories: any[] = [];
  public images: any [] = [
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'
  ];


  constructor(private http: DataService, private route: Router) {}
  

  ngOnInit(): void {
    this.http.getCategories().subscribe(data=>this.categories = data)
  }
  catPass(category: string){
    this.route.navigate(["category", category])
  }

}
