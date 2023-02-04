import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Product, ProductsResponse } from './product.model';

interface CategoryMap {
  [key: string]: boolean | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productsUrl = 'https://dummyjson.com/products';

  private products = new BehaviorSubject<Product[]>([]);
  public products$ = this.products.asObservable();

  private techCategories: CategoryMap = { smartphones: true, laptops: true };
  public techProducts$ = this.products$.pipe(
    map((products) =>
      products.filter((product) => this.techCategories[product.category])
    )
  );

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http
      .get<ProductsResponse>(this.productsUrl)
      .pipe(tap(({ products }) => this.products.next(products)));
  }
}
