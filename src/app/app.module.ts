import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './componente/header/header.component';
import { SidenavComponent } from './componente/sidenav/sidenav.component';
import { ProductComponent } from './page/product/product.component';
import { LoginComponent } from './page/login/login.component';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { CartComponent } from './page/cart/cart.component';
import { NovidadesComponent } from './page/novidades/novidades.component';
import { PromocaoComponent } from './page/promocao/promocao.component';
import { ProductCardComponent } from './componente/product-card/product-card.component';
import { FilterComponent } from './componente/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ProductComponent,
    LoginComponent,
    FavoritesComponent,
    CartComponent,
    NovidadesComponent,
    PromocaoComponent,
    ProductCardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
