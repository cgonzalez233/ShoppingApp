import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

const routes: Routes = [
    {path: '/home', component: HomePageComponent},
    {path: '/item:id', component: ItemPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }