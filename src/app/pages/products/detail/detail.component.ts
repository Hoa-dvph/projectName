import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgIf } from '@angular/common';
import { ProductService } from '../../../service/product.service';
import { IProduct } from '../../../entities/products';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product!: IProduct | undefined;

  ngOnInit() {
    this.route.params.subscribe((param) => {
      console.log(param['id']);
      this.productService.getProductDetail(param['id']).subscribe({
        next: (data) => {
          console.log(data);
          this.product = data;
        },
        error: (error) => {
          // show thong bao error
          console.error(error);
        },
      });
    });
  }
}