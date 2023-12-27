import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-pedido',
  templateUrl: './profile-pedido.component.html',
  styleUrls: ['./profile-pedido.component.scss']
})
export class ProfilePedidoComponent {
  pedidoConcluidos: boolean = false;
  pedidos: string[] = [];
}
