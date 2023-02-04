import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Product, ProductsResponse } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productsUrl = 'https://dummyjson.com/products';

  private products = new BehaviorSubject<Product[]>([]);
  public products$ = this.products.asObservable();

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http
      .get<ProductsResponse>(this.productsUrl)
      .pipe(tap(({ products }) => this.products.next(products)));
  }
}
