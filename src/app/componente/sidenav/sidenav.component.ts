import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  nav: string =  '';
  category: string = 'all';

  constructor(
    private productService: ProductService, 
    ) {}

  openItem(componente: any) {
    this.nav = componente;
  }

  closeItem() {
    this.nav = '';
  }

  fetchProductsByGender(gender: string) {
    this.productService.filterProductsGender(gender)
  }
}