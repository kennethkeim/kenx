import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MOCK_PRODUCTS_RESPONSE } from './models/products.mock';

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

  it('should get products', () => {
    service.getProducts().subscribe((response) => {
      expect(response).toBe(MOCK_PRODUCTS_RESPONSE);
    });
  });
});
