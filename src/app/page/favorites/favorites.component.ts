import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteItems: Product[] = [];
  products: Product[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.favoritesService.favoriteItems
      .pipe(takeUntil(this.destroy$))
      .subscribe(favorites => {
        this.favoriteItems = favorites;
      });
  }

  adicionarItem(item: any): void {
    this.favoritesService.addToCart(item.product);
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
