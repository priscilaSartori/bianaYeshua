import { Product } from "../interfaces/product";

export interface CartItem {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}