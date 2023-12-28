import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  page = 'navDados';

  constructor(
    private userService: UserService,
    ) {}

  displayPage(event: any) {
    this.page = event;
  }

  changeLogin() {
    this.userService.changeLogged()
  }
}
