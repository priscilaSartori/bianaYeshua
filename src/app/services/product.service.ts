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
      isLaunch: false,
      promotion: true,
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
      isLaunch: false,
      promotion: true,
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
      isLaunch: false,
      promotion: true,
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
      isLaunch: false,
      promotion: true,
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
      isLaunch: false,
      promotion: false,
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
      isLaunch: false,
      promotion: false,
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
      isLaunch: false,
      promotion: false,
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
      isLaunch: false,
      promotion: false,
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
      isLaunch: false,
      promotion: false,
    },
    {
      id: 10,
      name: 'Saia Assimétrica Linho Ananda',
      description: 'Sua saia de linho com fivelas e cinto do mesmo tecido é uma opção de vestuário leve e sofisticada. O linho confere um toque de elegância, e as fivelas e o cinto, feitos do mesmo tecido, adicionam um detalhe interessante, completando o visual com estilo. É uma escolha versátil para várias ocasiões.',
      category: 'Roupas',
      price: 303.00,
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/1103385/saia_assimetrica_linho_ananda_2035_1_45df2777aaa8587d424de89b9a4420ee.jpg',
      isfavorite: false,
      toCart: false,
      isLaunch: true,
      promotion: false,
    },
    {
      id: 11,
      name: 'Blazer Linho Elegante Leticia',
      description: 'Um blazer em linho é uma escolha de vestuário que combina elegância e conforto. O linho é um tecido leve e respirável, tornando-o ideal para climas mais quentes. Um blazer feito desse material é uma peça versátil que pode ser usada para criar looks formais ou casuais, adicionando um toque de sofisticação ao seu visual. É uma opção clássica que pode ser facilmente combinada com diferentes roupas e acessórios.',
      category: 'Roupas',
      price: 338.00,
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/1103385/blazer_linho_elegante_leticia_2039_variacao_16901_1_1ad9fb7590f1e2328537156dc71a603d.jpg',
      isfavorite: false,
      toCart: false,
      isLaunch: true,
      promotion: false,
    },
    {
      id: 12,
      name: 'Regata Assimétrica Brisa',
      description: 'Uma regata é uma peça de roupa essencial e versátil, geralmente feita de um tecido com nervuras, proporcionando um ajuste confortável e uma aparência clássica. Essas regatas são ideais para o uso diário e podem ser facilmente combinadas com uma variedade de outras roupas, tornando-as um item básico no guarda-roupa.',
      category: 'Roupas',
      price: 158.00,
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/1103385/regata_assimetrica_brisa_2023_variacao_16751_1_a19db0cbcf4fe87e511f3ec7640801c4.jpg',
      isfavorite: false,
      toCart: false,
      isLaunch: true,
      promotion: false,
    },
    {
      id: 13,
      name: 'Macacão Acetinado Juliana',
      description: 'O seu macacão acetinado com cinto do mesmo tecido é uma escolha elegante e sofisticada. O tecido acetinado confere um brilho suave, criando um visual luxuoso. O cinto que combina harmoniosamente acentua a cintura, adicionando um toque de estilo. Este macacão é perfeito para eventos mais formais ou ocasiões especiais, combinando conforto com um design chique.',
      category: 'Roupas',
      price: 510.00,
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/1103385/macacao_acetinado_juliana_2031_1_8b8f120143e08fbbfcb197e0cd77b120.jpg',
      isfavorite: false,
      toCart: false,
      isLaunch: true,
      promotion: false,
    },
    {
      id: 14,
      name: 'Short Saia Transpassado Alfaiataria',
      description: 'Short saia transpassado alfaiataria.',
      category: 'Roupas',
      price: 234.00,
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/1103385/short_saia_transpassado_alfaiataria_2061_2_8c4e9029badffc85620d2e8469eba724.jpg',
      isfavorite: false,
      toCart: false,
      isLaunch: true,
      promotion: false,
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

  updateProductFavorite(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    
    if (index !== -1) {
      this.products[index] = { ...this.products[index], isfavorite: false };
      this.filterSubject.next([...this.products]);
    }
  }

  updateProductCart(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    
    if (index !== -1) {
      this.products[index] = { ...this.products[index], toCart: false };
      this.filterSubject.next([...this.products]);
    }
  }
}
