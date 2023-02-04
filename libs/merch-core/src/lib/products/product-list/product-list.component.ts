import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'kenx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private readonly categories = ['smartphones', 'laptops'];

  public products$ = this.productsService.products$.pipe(
    map((products) => {
      return products.filter((product) =>
        this.categories.includes(product.category)
      );
    })
  );

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // TODO: cleanup sub
    this.productsService.getProducts().subscribe();
  }
}
