import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productServices: ProductService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.productId != 0) {
      this.productServices.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.getProductName.setValue(this.product.productName);
          this.getPrice.setValue(this.product.price);
          this.getQuantity.setValue(this.product.quantity);
        },
      });
    }
  }
  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(10)]),
    quantity: new FormControl('', [Validators.required]),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  formHandler(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      // add
      if (this.productId == 0) {
        this.productServices.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        this.productServices
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    }
  }
}
