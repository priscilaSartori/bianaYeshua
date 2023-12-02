import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  openItem(componente: any) {
    this.nav = componente;
  }

  closeItem() {
    this.nav = '';
  }

  fetchProductsByGender(gender: string) {
    this.productService.filterProductsGender(gender)
    this.router.navigate(['/products/category/' + gender]);
  }

  fetchProductsByCategory(gender: string, category: string) {
    this.productService.filterProductsCategory(gender, category)
    this.router.navigate(['/products/category/' + gender + '/' + category]);
  }

}