import { Component } from '@angular/core';
import { AuthService } from "../../../../service/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.sass']
})
export class UserComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
