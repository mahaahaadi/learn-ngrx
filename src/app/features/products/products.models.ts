export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export const PRODUCTS_FEATURE_KEY = 'products';
