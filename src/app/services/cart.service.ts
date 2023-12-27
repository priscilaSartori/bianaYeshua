import { Injectable } from '@angular/core';
import { ICart } from '../interfaces/ICart';
import { IProduct } from '../interfaces/IProduct';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: ICart[] = [];
  quantidadeTotal: number = 0;

  constructor(private zone: NgZone) {}

  getCartItems(): ICart[] {
    return this.cartItems;
  }

  addToCart(product: IProduct): void {
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

  decreaseFromCart(item: ICart): void {
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

  removeFromCart(itemToRemove: ICart): void {
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
