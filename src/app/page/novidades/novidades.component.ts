import { Component } from '@angular/core';
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

}
