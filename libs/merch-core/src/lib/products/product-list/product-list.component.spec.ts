import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator/jest';
import { firstValueFrom, Observable, of } from 'rxjs';
import { ProductsService } from '../products.service';

import { ProductListComponent } from './product-list.component';
import {
  MOCK_PRODUCTS,
  MOCK_PRODUCTS_RESPONSE,
  MOCK_TECH_PRODUCTS,
} from '../models/products.mock';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    const productsService = mockProvider(ProductsService, {
      products$: of(MOCK_PRODUCTS),
      getProducts: () => of(MOCK_PRODUCTS_RESPONSE),
      techProducts$: of(MOCK_TECH_PRODUCTS),
    });

    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [productsService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have products array observable', async () => {
    expect(component.products$).toBeInstanceOf(Observable);

    // use .resolves for promises (or just await them first)
    // const products = firstValueFrom(component.products$);
    // await expect(products).resolves.toBeInstanceOf(Array);

    const products = await firstValueFrom(component.products$);
    expect(products).toBeInstanceOf(Array);
  });
});
