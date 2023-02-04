import { Product, ProductsResponse } from './product.model';

const mockProduct = (args: Partial<Product>): Product => {
  return {
    id: 0,
    title: '',
    brand: '',
    category: 'office',
    description: '',
    images: [],
    thumbnail: '',
    rating: 0,
    price: 0,
    discountPercentage: 0,
    stock: 0,
    ...args,
  };
};

/** smartphones and laptops (categories the home page shows) */
export const mockTechProducts: Product[] = [
  mockProduct({ category: 'laptops', price: 200, rating: 5 }),
  mockProduct({ category: 'laptops', price: 600, rating: 2 }),
  mockProduct({ category: 'smartphones', price: 100, rating: 1 }),
  mockProduct({ category: 'laptops', price: 500, rating: 3 }),
];

/** all products */
export const mockProducts: Product[] = [
  ...mockTechProducts,
  mockProduct({ category: 'kitchen', price: 900, rating: 2 }),
  mockProduct({ category: 'office', price: 800, rating: 4 }),
];

export const sortedMockPrices = [100, 200, 500, 600, 800, 900];
export const sortedMockRatings = [1, 2, 2, 3, 4, 5];

export const mockProductsResponse: ProductsResponse = {
  limit: 0,
  skip: 0,
  total: 0,
  products: mockProducts,
};
