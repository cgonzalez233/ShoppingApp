import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];
  proCategory: any[] = [
    {image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},
    {image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
    {image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
    {image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"},
  ];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(data =>
      this.categories = data)
  }

  onClick(id:any){
    // this.router.navigate(['productPage', id])
  }


}
