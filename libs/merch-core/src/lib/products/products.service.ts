import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Product, ProductSort, ProductsResponse } from './models/product.model';

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

  public activeSort: ProductSort = 'price';
  public readonly sortOptions: ProductSort[] = ['price', 'rating'];

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<ProductsResponse>(this.productsUrl).pipe(
      map(({ products }) => products),
      map((products) => this.sortProducts(products)),
      tap((products) => this.products.next(products))
    );
  }

  public sortProductsBy(sortBy: ProductSort): void {
    this.activeSort = sortBy;
    const sorted = this.sortProducts(this.products.value);
    this.products.next(sorted);
  }

  private sortProducts(products: Product[]): Product[] {
    return [...products].sort(
      (a, b) => a[this.activeSort] - b[this.activeSort]
    );
  }
}
