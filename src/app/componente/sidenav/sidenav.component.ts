import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  nav: string =  '';

  constructor(private productService: ProductService) {}
  
  display(componente: any) {
    this.nav = componente;
    this.productService.filterProducts(componente)
  }

  openItem(componente: any) {
    this.nav = componente;
  }

  closeItem() {
    this.nav = '';
  }
}