import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {NewUserFormComponent}from 'src/app/components/new-user-form/new-user-form.component'

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'category-page', component: CategoryPageComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'new-user-form', component: NewUserFormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
