import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../../service/product.service';
import { IProduct } from '../../../../entities/products';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, NgxPaginationModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  listProduct: IProduct[] = [];
  filterValue: string = '';
  page: number = 1;

  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.products = products;
        this.listProduct = products;
      },
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
          this.listProduct = this.listProduct.filter(p => p !== product);
        },
        (error) => {
          console.error('Error deleting product:', error);
          alert('An error occurred while deleting the product.');
        }
      );
    }
  }

  filter() {
    if (this.filterValue) {
      this.products = this.listProduct.filter(p =>
        p.productName.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    } else {
      this.products = [...this.listProduct];
    }
  }
}
