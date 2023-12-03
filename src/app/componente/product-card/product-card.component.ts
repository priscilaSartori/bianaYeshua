import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  productsNovidades: Product[] = this.productService.products.filter((launch) => launch.isLaunch === true);
  isRoute: string = '';

  constructor(
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.isRoute = 'home';
    } else if (this.router.url.includes('/products')) {
      this.isRoute = 'products';
    } else if (this.router.url === '/favorites') {
      this.isRoute = 'favorite';
    }
  }

  removeFavorite(item: any) {
    this.favoritesService.removeFromCart(item);
    this.productService.updateProductFavorite(item);
  }

  addFavoriteToCart(product: Product) {
    this.cartService.addToCart(product);
    product.toCart = true;
    this.removeFavorite(product);
  }

  toggleFavorite(idFavorite: any) {
    const product = this.isRoute === 'home' ? this.productsNovidades.find(p => p.id === idFavorite) :
                                              this.productService.products.find(p => p.id === idFavorite);

    if (product) {
      product.isfavorite = !product.isfavorite;

      if (product.isfavorite) {
        this.favoritesService.addToCart(product);
      } else {
        this.favoritesService.removeFromCart(product);
      }
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    product.toCart = true;
  }

  removeToCart(product: Product): void {
    const itemRemove = this.cartService.cartItems.find((cart) => cart.product.id === product.id);
    if (itemRemove) {
      this.cartService.removeFromCart(itemRemove);
      product.toCart = false;
    }
  }
}
