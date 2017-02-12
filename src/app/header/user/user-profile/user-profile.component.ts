import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/authentication.service";
import { User } from "../../../model/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

}
