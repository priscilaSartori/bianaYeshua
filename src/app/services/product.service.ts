import { Injectable } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject = new Subject<IProduct[]>();
  private genderSubject = new Subject<string>();

  products: IProduct[] = [];
  gender: string = '';
  filter: IProduct[] = [];

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

  obterVariavel2Observable(): Observable<IProduct[]> {
    return this.productsSubject.asObservable();
  }

  obterVariavel1Observable(): Observable<string> {
    return this.genderSubject.asObservable();
  }

  updateProductFavorite(product: IProduct): void {
    this.updateProduct(product, 'isfavorite', false);
  }

  updateProductCart(product: IProduct): void {
    this.updateProduct(product, 'toCart', false);
  }

  private updateProduct(product: IProduct, property: string, value: any): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], [property]: value };
      this.productsSubject.next([...this.products]);
    }
  }
}
