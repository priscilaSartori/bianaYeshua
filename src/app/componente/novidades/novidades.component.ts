import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';
import { feminino, masculino, infantil, acessorios, praia, fitness } from '../../mocks/productsData';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss']
})
export class NovidadesComponent {
  productsNovidades: Product[] = [];
  displayedProducts = this.productsNovidades.slice(0, 4);
  currentIndex = 0;
  translateX = 0;
  itemsPerPage = 4; 
  
  constructor(
  ) {
    this.filtrarNovidades();
  }

  filtrarNovidades() {
    const filterFeminino = feminino.filter((item) => item.isLaunch === true);
    const filterMasculino = masculino.filter((item) => item.isLaunch === true);
    const filterInfantil = infantil.filter((item) => item.isLaunch === true);
    const filterAcessorios = acessorios.filter((item) => item.isLaunch === true);
    const filterPraia = praia.filter((item) => item.isLaunch === true);
    const filterFitness = fitness.filter((item) => item.isLaunch === true);

    this.productsNovidades = [
      ...filterFeminino,
      ...filterMasculino,
      ...filterInfantil,
      ...filterAcessorios,
      ...filterPraia,
      ...filterFitness
    ];

    this.updateTranslateX();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateTranslateX();
    }
  }

  nextSlide() {
    const maxIndex = this.productsNovidades.length - this.itemsPerPage;
    if (this.currentIndex < maxIndex) {
      this.currentIndex += 1;
      this.updateTranslateX();
    }
  }

  updateTranslateX() {
    this.displayedProducts = this.productsNovidades.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    ); 
  }
}