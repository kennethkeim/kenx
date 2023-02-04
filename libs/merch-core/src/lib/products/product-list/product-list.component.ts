import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'kenx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    // TODO: cleanup sub
    this.productsService.getProducts().subscribe();
  }
}
