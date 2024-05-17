import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ProductService } from '../../../../service/product.service';
import { IProduct } from '../../../../entities/products';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ProductListComponent {
  products: IProduct[] = [];

  productService = inject(ProductService);

  // ngOnInit
  ngOnInit() {
    this.productService
      .getAllProduct()
      .subscribe((products) => (this.products = products));
  }
  // ngDoCheck() {
  //   console.log(this.products);
  // }
}