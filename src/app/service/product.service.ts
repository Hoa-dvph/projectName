import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../entities/products';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  apiURL = 'http://localhost:3000/products';

  constructor() { }
  // getAllProduct
  getAllProduct() {
    return this.http.get<IProduct[]>(this.apiURL);
  }

  // getDetailProduct
  // createProduct
  // updateProduct
  // deleteProduct
}