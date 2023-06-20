import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/myFooter/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    ProductItemComponent,
    GallaryComponent,
    TodosComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
