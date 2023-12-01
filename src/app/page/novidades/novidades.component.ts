import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss']
})
export class NovidadesComponent implements OnInit{
  productsNovidades: Product[] = this.productService.products.filter((launch) => launch.isLaunch === true);
  
  constructor(
    private productService: ProductService,
    public cartService: CartService,
    public favoritesService: FavoritesService,
    ) {}

  ngOnInit() {}

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
    const product = this.productsNovidades.find(p => p.id === idFavorite);
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
