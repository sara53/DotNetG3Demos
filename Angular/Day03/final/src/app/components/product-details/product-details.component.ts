import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productId: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  backToHome() {
    this.router.navigate(['/products']);
  }
}
