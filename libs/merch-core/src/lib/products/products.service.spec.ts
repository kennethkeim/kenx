import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import {
  mockProducts,
  mockProductsResponse,
  mockTechProducts,
  sortedMockPrices,
  sortedMockRatings,
} from './models/products.mock';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  const httpClientMock = {
    get: jest.fn(() => of(mockProductsResponse)),
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    });
    service = TestBed.inject(ProductsService);

    // fetch data since all tests need it
    await firstValueFrom(service.getProducts());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', (done) => {
    // often, you might want to use the firstValueFrom or lastValueFrom
    // to transform to a promise, but this is another way to handle obs$
    // sticking with observable streams might be a good idea for more complex stuff

    // also, the getProducts call is extra since we're calling it in the beforeEach
    // that's fine since we need it in the beforeEach for the other tests
    service.getProducts().subscribe((products) => {
      expect(products).toBeInstanceOf(Array);
      done();
    });
  });

  it('should update products observable with correct shape', async () => {
    const products = await firstValueFrom(service.products$);
    expect(products).toBeInstanceOf(Array);
    expect(products).toHaveLength(mockProducts.length);
    expect(Object.keys(products[0]).sort()).toEqual(
      Object.keys(mockProducts[0]).sort()
    );
  });

  it('should sort products by price initially', async () => {
    const products = await firstValueFrom(service.products$);
    const prices = products.map((p) => p.price);
    expect(prices).toEqual(sortedMockPrices);
  });

  it('should handle sort by rating', async () => {
    service.sortProductsBy('rating');
    expect(service.activeSort).toBe('rating');
    const products = await firstValueFrom(service.products$);
    const ratings = products.map((p) => p.rating);
    expect(ratings).toEqual(sortedMockRatings);
  });

  it('should filter tech products', async () => {
    const techProducts = await firstValueFrom(service.techProducts$);
    expect(techProducts).toBeInstanceOf(Array);
    expect(techProducts).toHaveLength(mockTechProducts.length);
  });
});
