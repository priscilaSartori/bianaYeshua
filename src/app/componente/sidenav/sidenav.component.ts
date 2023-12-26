import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { feminino, masculino, infantil, acessorios, praia, fitness } from '../../mocks/productsData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  nav: string =  '';
  category: string = 'all';
  feminino = feminino;
  masculino = masculino;
  infantil = infantil;
  acessorios = acessorios;
  praia = praia;
  fitness = fitness;

  constructor(
    private productService: ProductService, 
    ) {}

  openItem(componente: any) {
    this.nav = componente;
  }

  closeItem() {
    this.nav = '';
  }

  fetchProductsByGender(produtos: any) {
    this.productService.productsGender(produtos);
  }
}