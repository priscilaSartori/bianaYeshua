import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteItemsSubject = new BehaviorSubject<Product[]>([]);
  favoriteItems = this.favoriteItemsSubject.asObservable();

  getFavoriteItems() {
    return this.favoriteItemsSubject.value;
  }

  addToCart(product: Product): void {
    const existingItem = this.favoriteItemsSubject.value.find(item => item.id === product.id);

    if (!existingItem) {
      const updatedFavorites = [...this.favoriteItemsSubject.value, product];
      this.favoriteItemsSubject.next(updatedFavorites);
    }
  }

  removeFromCart(product: Product): void {
    const updatedFavorites = this.favoriteItemsSubject.value.filter(favorite => favorite.id !== product.id);
    this.favoriteItemsSubject.next(updatedFavorites);
  }
}
