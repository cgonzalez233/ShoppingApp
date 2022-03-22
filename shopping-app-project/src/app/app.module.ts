import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    SubcategoryComponent,
    ItemPageComponent,
    CheckoutPageComponent,
    LoginPageComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
