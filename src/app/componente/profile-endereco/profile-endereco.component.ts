import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-endereco',
  templateUrl: './profile-endereco.component.html',
  styleUrls: ['./profile-endereco.component.scss']
})
export class ProfileEnderecoComponent {
  enderecoCadastrado: boolean = false;
  enderecos: string[] = [];
}
