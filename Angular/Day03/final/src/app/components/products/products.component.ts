import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productsList } from 'src/app/models/productsList';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Iproduct[] = productsList;
}
