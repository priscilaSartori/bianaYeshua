import { Injectable } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject = new Subject<Product[]>();
  private genderSubject = new Subject<string>();

  products: Product[] = [];
  gender: string = '';
  filter: Product[] = [];

  constructor(private router: Router) {}

  getProducts() {
    return this.products;
  }

  getGender() {
    return this.gender;
  }

  productsGender(produtos: any) {
    this.products = produtos;
    this.gender = produtos[0].gender;
    this.productsSubject.next(this.products);
    this.genderSubject.next(this.gender);
    this.router.navigate(['/products/' + this.gender]);
  }

  filterProductsCategory(category: any) {
    this.filter = this.products.filter((product) => product.category === category)
    this.productsSubject.next(this.filter);
  }

  obterVariavel2Observable(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  obterVariavel1Observable(): Observable<string> {
    return this.genderSubject.asObservable();
  }

  updateProductFavorite(product: Product): void {
    this.updateProduct(product, 'isfavorite', false);
  }

  updateProductCart(product: Product): void {
    this.updateProduct(product, 'toCart', false);
  }

  private updateProduct(product: Product, property: string, value: any): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], [property]: value };
      this.productsSubject.next([...this.products]);
    }
  }
}
