import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ProductService } from '../../../../service/product.service';
import { IProduct } from '../../../../entities/products';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (products) => (this.products = products),
      (error) => {
        console.error('Error fetching products:', error);
        alert('An error occurred while fetching the product list.');
      }
    );
  }

  deleteProduct(product: IProduct) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(product.id).subscribe(
        () => {
          this.products = this.products.filter(p => p !== product);
          alert('Product deleted successfully!');
        },
        (error) => {
          console.error('Error deleting product:', error);
          alert('An error occurred while deleting the product.');
        }
      );
    }
  }
}
