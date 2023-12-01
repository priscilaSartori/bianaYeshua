export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  // color: string;
  // tamanho: string;
  price: number;
  imageUrl: string;
  isfavorite: boolean;
  toCart: boolean;
  isLaunch: boolean,
  promotion: boolean,
}