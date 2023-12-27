import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICart } from '../../interfaces/ICart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();
  
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    ) {}

  adicionarItem(item: ICart): void {
    this.cartService.addToCart(item.product);
  }

  removerItem(item: ICart): void {
    this.cartService.removeFromCart(item);
    this.productService.updateProductCart(item.product);
  }

  decreaseItem(item: ICart): void {
    this.cartService.decreaseFromCart(item);
    this.productService.updateProductCart(item.product);
  }

  calculateTotal(): number {
    return this.cartService.calculateTotal();
  }

  pagamento() {
    
  }
}
