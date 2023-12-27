import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from 'src/app/interfaces/IProduct';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss']
})
export class PromocaoComponent {
  productsOferta: IProduct[] = this.productService.products.filter((promotion) => promotion.promotion === true);
  slides = this.promotionService.getSlides();
  promotion = this.promotionService.getPromocoes();
  
  constructor(
    private productService: ProductService,
    private promotionService:PromotionService,
  ) {}
}
