import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  favorites: Product[] = [];
  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    public cartService: CartService,
    ) {}

  ngOnInit() {
    this.getProducts();
    this.productService.obterVariavel2Observable().subscribe(novaVariavel => {
      this.products = novaVariavel;
    });
  }

  getProducts() {
    if (this.productService.filter.length > 0) {
      this.products = this.productService.filter;
    } 
    this.products = this.productService.products;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product) 
    product.toCart = true;
  }

  removeToCart(product: Product): void {
    const itemRemove = this.cartService.cartItems.filter((cart) => cart.product.id === product.id)
    this.cartService.removeFromCart(itemRemove[0]) 
    product.toCart = false;
  }

  toggleFavorite(idFavorite: any) {
    const product = this.products.find(p => p.id === idFavorite);
    if (product) {
      product.isfavorite = !product.isfavorite;
      if (product.isfavorite) {
        this.favorites.push(product);
      } else {
        const index = this.favorites.findIndex(p => p.id === idFavorite);
        if (index !== -1) {
          this.favorites.splice(index, 1);
        }
      }
    }
    // Colocar no localStorage e na API
    // this.productService.updateProduct(product);
  }
}

export { Product };
