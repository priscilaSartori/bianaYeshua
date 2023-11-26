import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();
  
  constructor(private cartService: CartService) {}

  adicionarItem(item: CartItem): void {
    this.cartService.addToCart(item.product);
  }

  removerItem(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  calculateTotal(): number {
    return this.cartService.calculateTotal();
  }

  removeItem(item: any) {
    console.log(item)
    return this.cartService.removeFromCart(item);
  }


  pagamento() {
    
  }
}
