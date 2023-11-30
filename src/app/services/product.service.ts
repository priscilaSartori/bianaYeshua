import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private filterSubject = new Subject<Product[]>();
  filter: Product[] = []
  
  products: Product[] = [
    {
      id: 1,
      name: 'Blusa',
      description: 'Blusa Morena Rosa Decote V Manga Curta Transpasse Frente.',
      category: 'Roupas',
      price: 350.00,
      imageUrl: 'https://lojamorenarosa.vtexassets.com/arquivos/ids/299706-800-auto?v=638349287945230000&width=800&height=auto&aspect=true',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 2,
      name: 'Calça',
      description: 'Calca Morena Rosa Skinny Cós Alto Com Rebite Off White.',
      category: 'Roupas',
      price: 1200.00,
      imageUrl: 'https://lojamorenarosa.vtexassets.com/arquivos/ids/300125-800-auto?v=638349312694630000&width=800&height=auto&aspect=true',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 3,
      name: 'Bolsa Chanel',
      description: 'Bolsa tiracolo Chanel Double Flap Metálica.',
      category: 'Bolsa',
      price: 40000.00,
      imageUrl: 'https://cdnimg.etiquetaunica.com.br/products/webp/medium/bolsa-tiracolo-chanel-double-flap-metalica-cbyt5-1694173834-0000001_v2.webp',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 4,
      name: 'Scarpin Chanel',
      description: 'Scarpin Chanel Gaptoe Couro Preto.',
      category: 'Sapatos',
      price: 1800.00,
      imageUrl: 'https://cdnimg.etiquetaunica.com.br/products/webp/medium/scarpin-chanel-captoe-couro-preto-awu3123-1693855938-0000001_v2.webp',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 5,
      name: 'Óculos Chanel',
      description: 'Óculos de sol Chanel 4222 Tartaruga.',
      category: 'Acessorios',
      price: 1600.00,
      imageUrl: 'https://cdnimg.etiquetaunica.com.br/products/webp/medium/oculos-de-sol-chanel-4222-tartaruga-caxa4-1693403164-0000001_v2.webp',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 6,
      name: 'Maio',
      description: 'Maio Morena Rosa Decote Quadrado Marrom.',
      category: 'Praia',
      price: 499.99,
      imageUrl: 'https://lojamorenarosa.vtexassets.com/arquivos/ids/290605-auto-895?v=638308129985070000&width=auto&height=895&aspect=true',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 7,
      name: 'Top',
      description: 'Top Morena Rosa Esportivo Nadador Com Recorte Laranja.',
      category: 'Fitness',
      price: 349.99,
      imageUrl: 'https://lojamorenarosa.vtexassets.com/arquivos/ids/294257-auto-895?v=638311431053470000&width=auto&height=895&aspect=true',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 8,
      name: 'Blusa Nike',
      description: 'Blusa Nike Tecido preto.',
      category: 'Masculino',
      price: 300.00,
      imageUrl: 'https://cdnimg.etiquetaunica.com.br/products/webp/medium/blusa-nike-tecido-preto-actw59-1700590996-0000001_v2.webp',
      isfavorite: false,
      toCart: false,
    },
    {
      id: 9,
      name: 'Vestido Mixed',
      description: 'Vestido Mixed Tecido estampado.',
      category: 'Infantil',
      price: 370.00,
      imageUrl: 'https://cdnimg.etiquetaunica.com.br/products/webp/medium/vestido-mixed-tecido-estampado-rpx1190-1700242408-0000001_v2.webp',
      isfavorite: false,
      toCart: false,
    },
  ];

  getProducts() {
    return this.filter.length > 0 ? this.filter : this.products;
  }

  filterProducts(category: any) {
    this.filter = this.products.filter((product) => product.category === category)
    this.filterSubject.next(this.filter);
  }

  obterVariavel2Observable() {
    return this.filterSubject.asObservable();
  }

  updateProductState(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    
    if (index !== -1) {
      this.products[index] = { ...this.products[index], isfavorite: false };
      this.filterSubject.next([...this.products]);
    }
  }
}
