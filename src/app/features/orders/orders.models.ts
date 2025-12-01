export interface Order {
  id: number;
  productId: number;
  quantity: number;
  status: 'pending' | 'processing' | 'delivered' | 'failed';
  createdAt: string;
}

export interface CreateOrderRequest {
  productId: number;
  quantity: number;
}

export const ORDERS_FEATURE_KEY = 'orders';
