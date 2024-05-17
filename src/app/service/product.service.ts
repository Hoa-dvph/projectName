import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../entities/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiURL);
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiURL}/${productId}`;
    return this.http.delete<void>(url);
  }
}
