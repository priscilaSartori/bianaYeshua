import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-cartao',
  templateUrl: './profile-cartao.component.html',
  styleUrls: ['./profile-cartao.component.scss']
})
export class ProfileCartaoComponent {
  cartaoCadastrado: boolean = false;
  cartoes: string[] = [];
}
