import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import {
  MOCK_PRODUCTS,
  MOCK_PRODUCTS_RESPONSE,
  MOCK_TECH_PRODUCTS,
} from './models/products.mock';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  const httpClientMock = {
    get: jest.fn(() => of(MOCK_PRODUCTS_RESPONSE)),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // the following 3 it statements could be combined into one since they work with the same data source?
  // this would eliminate the need to call getProducts() multiple times

  it('should get products', () => {
    service.getProducts().subscribe((response) => {
      expect(response).toEqual(MOCK_PRODUCTS_RESPONSE);
    });
  });

  it('should update products observable', async () => {
    await firstValueFrom(service.getProducts());
    const products = await firstValueFrom(service.products$);
    expect(products).toEqual(MOCK_PRODUCTS);
  });

  it('should filter tech products', async () => {
    await firstValueFrom(service.getProducts());
    const techProducts = await firstValueFrom(service.techProducts$);
    expect(techProducts).toEqual(MOCK_TECH_PRODUCTS);
  });
});
