import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { categories } from '../../mocks/categoriesData';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  selectedCategory: string = '';
  categories = categories;

  constructor(private productService: ProductService) {}

  getCategoryList(): string[] {
    const gender = this.productService.getGender();
    switch (gender) {
      case 'feminino':
        return categories.feminino;
      case 'masculino':
        return categories.masculino;
      case 'infantil':
        return categories.infantil;
      case 'acessorios':
        return categories.acessorios;
      case 'praia':
        return categories.praia;
      case 'fitness':
        return categories.fitness;
      default:
        return [];
    }
  }

  filtrar() {
    this.productService.filterProductsCategory(this.selectedCategory.toLowerCase());
  }
}
