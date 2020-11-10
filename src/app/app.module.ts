import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClothesComponent } from './clothes/clothes.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClothesComponent,
    GadgetsComponent,
    Part1Component,
    Part2Component,
    GroceryComponent,
    ItemsComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
