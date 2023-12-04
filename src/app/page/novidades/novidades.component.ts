import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss']
})
export class NovidadesComponent {
  productsNovidades: Product[] = this.productService.products.filter((launch) => launch.isLaunch === true);

  constructor(
    private productService: ProductService,
  ) {}

  displayedProducts = this.productsNovidades.slice(0, 4);
  currentIndex = 0;
  translateX = 0;
  itemsPerPage = 4; 

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateTranslateX();
    }
  }

  nextSlide() {
    const maxIndex = this.productsNovidades.length - this.itemsPerPage;
    if (this.currentIndex < maxIndex) {
      this.currentIndex += 1;
      this.updateTranslateX();
    }
  }

  updateTranslateX() {
    this.displayedProducts = this.productsNovidades.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    ); 
  }
}