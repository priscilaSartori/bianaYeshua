import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    public cartService: CartService,
    public favoritesService: FavoritesService,
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
    } else {
      this.products = this.productService.products;
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product) 
    product.toCart = true;
  }

  removeToCart(product: Product): void {
    const itemRemove = this.cartService.cartItems.find((cart) => cart.product.id === product.id);
    if (itemRemove) {
      this.cartService.removeFromCart(itemRemove);
      product.toCart = false;
    }
  }

  toggleFavorite(idFavorite: any) {
    const product = this.products.find(p => p.id === idFavorite);
    if (product) {
      product.isfavorite = !product.isfavorite;

      if (product.isfavorite) {
        this.favoritesService.addToCart(product);
      } else {
        this.favoritesService.removeFromCart(product);
      }
    }
  }
}
