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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
import { NovidadesComponent } from './componente/novidades/novidades.component';
import { PromocaoComponent } from './componente/promocao/promocao.component';
import { ProductCardComponent } from './componente/product-card/product-card.component';
import { FilterComponent } from './componente/filter/filter.component';
import { FooterComponent } from './componente/footer/footer.component';
import { RegistrationComponent } from './page/registration/registration.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ProfileDadosComponent } from './componente/profile-dados/profile-dados.component';
import { ProfileEnderecoComponent } from './componente/profile-endereco/profile-endereco.component';
import { ProfilePedidoComponent } from './componente/profile-pedido/profile-pedido.component';
import { ProfileCartaoComponent } from './componente/profile-cartao/profile-cartao.component';

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
    FilterComponent,
    FooterComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    ProfileDadosComponent,
    ProfileEnderecoComponent,
    ProfilePedidoComponent,
    ProfileCartaoComponent
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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
