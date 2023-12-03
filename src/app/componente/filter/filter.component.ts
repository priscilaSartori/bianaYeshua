import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  selectedCategory: string = '';

  constructor(private productService: ProductService) {}

  getCategoryList(): string[] {
    const gender = this.productService.getGender();
    switch (gender) {
      case 'feminino':
        return this.productService.categories.feminino;
      case 'masculino':
        return this.productService.categories.masculino;
      case 'infantil':
        return this.productService.categories.infantil;
      case 'acessorios':
        return this.productService.categories.acessorios;
      case 'praia':
        return this.productService.categories.praia;
      case 'fitness':
        return this.productService.categories.fitness;
      default:
        return [];
    }
  }

  filtrar() {
    this.productService.filterProductsCategory(this.productService.gender, this.selectedCategory.toLowerCase());
  }
}
