import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart';
import { Product } from '../interfaces/product';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  quantidadeTotal: number = 0;

  constructor(private zone: NgZone) {}

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1, color: 'black', size: 'G' });
    }
    this.atualizarQuantidadeTotal();
    this.zone.run(() => {});
  }

  atualizarQuantidadeTotal() {
    this.quantidadeTotal = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  decreaseFromCart(item: CartItem): void {
    const index = this.cartItems.findIndex(cartItem => cartItem === item);
    if (index !== -1) {
      if (this.cartItems[index].quantity === 1) {
        this.cartItems.splice(index, 1);
      } else {
        this.cartItems[index].quantity--;
      }
    }
    this.atualizarQuantidadeTotal();
    this.zone.run(() => {});
  }

  removeFromCart(itemToRemove: CartItem): void {
    const index = this.cartItems.findIndex(cartItem => cartItem === itemToRemove);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this.atualizarQuantidadeTotal();
    this.zone.run(() => {});
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
