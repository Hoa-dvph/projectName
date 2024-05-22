import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IProduct } from '../../entities/products';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  showImage: boolean = true;

  toggleImageVisibility(): void {
    this.showImage = !this.showImage;
  }
  products: IProduct[] = [];
  listProduct: IProduct[] = [];
  filterValue: string = '';

  constructor() { }

  ngOnInit(): void {
    this.listProduct = [...this.products];
  }

  filter() {
    this.products = this.listProduct.filter(p =>
      p.productName.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}
