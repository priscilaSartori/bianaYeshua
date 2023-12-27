import { IProduct } from "./IProduct";

export interface ICart {
  product: IProduct;
  color: string;
  size: string;
  quantity: number;
}