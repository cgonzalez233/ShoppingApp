import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {NewUserFormComponent}from 'src/app/components/new-user-form/new-user-form.component'
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'category-page', component: CategoryPageComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'new-user-form', component: NewUserFormComponent},
  {path: 'checkout-page', component: CheckoutPageComponent},
  {path: 'itemPage/:id', component: ItemPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
