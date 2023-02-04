import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { ProductsService } from '../products.service';

import { ProductListComponent } from './product-list.component';
import {
  mockProductsResponse,
  mockTechProducts,
} from '../models/products.mock';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    const productsService = mockProvider(ProductsService, {
      getProducts: () => of(mockProductsResponse),
      techProducts$: of(mockTechProducts),
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

  it('should call getProducts', () => {
    jest.spyOn(component, 'getProducts');
    component.ngOnInit();
    expect(component.getProducts).toHaveBeenCalledTimes(1);
  });
});
