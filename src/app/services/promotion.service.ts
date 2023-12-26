import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getSlides() {
    return [
      { image: 'https://cdnimg.etiquetaunica.com.br/banners/1920_500_bf-top-5-marcas-de-bolsas-desk69.webp' },
      { image: 'https://cdnimg.etiquetaunica.com.br/banners/1920_500_live-shop-desk35.webp' },
      { image: 'https://images.tcdn.com.br/img/img_prod/1103385/1700840799_24_blackminhagrife_-_banner.png' },
      { image: 'https://images.tcdn.com.br/img/img_prod/1103385/1700840799_2-min.png' },
      { image: 'https://images.tcdn.com.br/img/img_prod/1103385/1700840800_3.png' },
    ];
  }
  
  getPromocoes() {
    return [
      { image: 'https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/12f0c92a-c9de-4d62-9415-cb5163ef0569___a73bdd5eb255a7d78efbfabe74e1eac2.jpg' },
      { image: 'https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/5bd7f8de-2ff9-4ace-be82-7f1efd247a2c___ad1a118c3ea275454f809b68bbb390ef.jpg' },
      { image: 'https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/c8029c64-61f8-49d9-80de-8ff1843d3438___06914c497b440ea0fd13fd05ff8d6cea.jpg' },
      { image: 'https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/c76b65ac-6849-48d1-8571-11eb17eb64ee___c00fc767a12ce0b5506a0e4e73b61be4.jpg' },
    ];
  }
}