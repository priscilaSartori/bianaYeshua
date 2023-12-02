import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { LoginComponent } from './page/login/login.component';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { CartComponent } from './page/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', redirectTo: 'category/all', pathMatch: 'full' },
      { path: 'category/:gender', component: ProductComponent },
      { path: 'category/:gender/:category', component: ProductComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'cart', component: CartComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
