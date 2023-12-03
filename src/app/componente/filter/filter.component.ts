import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  gender: string = '';
  selectedCategory: string = '';
  
  constructor(
    private productService: ProductService,
    ) {}

  ngOnInit() {
    this.productService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.gender = novaVariavel;
    });
  }

  getCategoryList(gender: string): string[] {
    switch (gender) {
      case 'feminino':
        return this.categoryFeminino;
      case 'masculino':
        return this.categoryMasculino;
      case 'infantil':
        return this.categoryInfantil;
      case 'acessorios':
        return this.categoryAcessorios;
      case 'praia':
        return this.categoryPraia;
      case 'fitness':
        return this.categoryFitness;
      default:
        return [];
    }
  }

  categoryFeminino = [
    'Croppeds', 'Bermudas', 'Blazers', 'Blusas', 'Body', 'Calças', 'Camisas', 'Cardigan', 'Casacos', 'Macacoes', 'Pijamas', 'Saias', 'Vestidos', 'Sapatos',
    ]

  categoryMasculino = [
    'Bermudas','Calças','Camisas','Camisetas','Casacos','Cuecas','Moletom','Polos'
  ]

  categoryInfantil = [
    'BebeFeminino','BebeMasculino','BebeUnissex','Meninas2a6','Meninos2a6','Meninas7a14','Meninos7a14',
  ]

  categoryAcessorios = [
    'Bolsas','Carteiras','Joias','Relogio','Oculos','Cintos','Bones', 'Lenços'
  ]

  categoryPraia = [
    'Biquinis','Maios','Cangas','Saidas','Bolsas','ChinelosF','Chapeus', 'Sungas','Shorts','Regatas','Camisetas','ChinelosM','Bones'
  ]

  categoryFitness = [
    'Camisetas','Tops','Camisas','Casacos','Moletom','Calças','Bermudas','Cuecas'
  ]

    filtrar() {
      this.productService.filterProductsCategory(this.gender, this.selectedCategory.toLowerCase())
    }
}
