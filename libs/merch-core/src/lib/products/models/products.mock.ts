import { Product, ProductsResponse } from '../product.model';

/** smartphones and laptops (categories the home page shows) */
export const MOCK_TECH_PRODUCTS: Product[] = [
  {
    id: 1,
    title: '',
    brand: '',
    category: 'smartphones',
    description: '',
    images: [],
    thumbnail: '',
    rating: 0,
    price: 0,
    discountPercentage: 0,
    stock: 0,
  },
  {
    id: 2,
    title: '',
    brand: '',
    category: 'laptops',
    description: '',
    images: [],
    thumbnail: '',
    rating: 0,
    price: 0,
    discountPercentage: 0,
    stock: 0,
  },
];

/** all products */
export const MOCK_PRODUCTS: Product[] = [
  ...MOCK_TECH_PRODUCTS,
  {
    id: 3,
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
  },
  {
    id: 4,
    title: '',
    brand: '',
    category: 'kitchen',
    description: '',
    images: [],
    thumbnail: '',
    rating: 0,
    price: 0,
    discountPercentage: 0,
    stock: 0,
  },
];

export const MOCK_PRODUCTS_RESPONSE: ProductsResponse = {
  limit: 0,
  skip: 0,
  total: 0,
  products: MOCK_PRODUCTS,
};
