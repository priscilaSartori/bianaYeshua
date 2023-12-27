import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-dados',
  templateUrl: './profile-dados.component.html',
  styleUrls: ['./profile-dados.component.scss']
})
export class ProfileDadosComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  cpf: string = '';
  genero: string = '';
  nascimento: string = '';
  telefone: string = '';
}
