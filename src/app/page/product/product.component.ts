import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy{
  products: Product[] = [];
  private inscricaoFiltro: Subscription;

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    public favoritesService: FavoritesService,
  ) {
    this.inscricaoFiltro = this.productService.obterVariavel2Observable().subscribe(produtos => {
      this.products = produtos;
    });
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // getProducts() {
  //   if (this.productService.filter.length > 0) {
  //     this.products = this.productService.filter;
  //   } else {
  //     this.products = this.productService.products;
  //   }
  // }

  ngOnDestroy() {
    this.inscricaoFiltro.unsubscribe();
  }
}
