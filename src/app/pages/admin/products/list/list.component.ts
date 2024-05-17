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
  deleteProduct(product: IProduct) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(product.productId).subscribe(
        () => {
          // Xóa sản phẩm thành công, cập nhật danh sách sản phẩm
          this.products = this.products.filter(p => p !== product);
          alert('Product deleted successfully!');
        },
        (error) => {
          console.error('Error deleting product:', error);
          alert('An error occurred while deleting the product.');
        }
      );

      // ngDoCheck() {
      //   console.log(this.products);
      // }
    }
  }
}