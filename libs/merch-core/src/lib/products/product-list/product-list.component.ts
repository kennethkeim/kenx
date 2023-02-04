import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'kenx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$ = this.productsService.techProducts$;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // TODO: cleanup sub
    this.productsService.getProducts().subscribe();
  }
}
