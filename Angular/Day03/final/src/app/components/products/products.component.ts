import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productsList } from 'src/app/models/productsList';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
