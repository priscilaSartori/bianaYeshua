import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  quantidadeTotal = this.cartService.quantidadeTotal;
  logged: boolean = false;
  private subscription: Subscription = new Subscription;

  constructor(
    public cartService: CartService,
    public userService: UserService,
    ) {}

     ngOnInit() {
      this.subscription = this.userService.obterVariavellogged().subscribe(log => {
        this.logged = log;
      });
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  
}
