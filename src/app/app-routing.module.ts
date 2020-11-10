import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { FooterComponent } from './footer/footer.component';
import { Part1Component } from './part1/part1.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'clothes',
    component:ClothesComponent
  },
  {
    path:'items',
    component:ItemsComponent
  },
  {
    path:'part1',
    component:Part1Component
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'gadgets',
    component:GadgetsComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
