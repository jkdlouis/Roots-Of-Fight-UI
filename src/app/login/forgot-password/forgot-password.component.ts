import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../model/user.model";
import { Router } from "@angular/router";
import { AuthService } from "../../service/authentication.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  onSubmit() {
   const user = new User(this.forgotPasswordForm.value.email);
   this.authService.retrievePassword(user)
       .subscribe(
           data => {
               console.log(data.password);
               this.router.navigateByUrl('/');
           },
           error => console.error(error)
       );
    this.forgotPasswordForm.reset();
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      'email': ['', [
          Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}" +
            "~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]" +
            "(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]]
    });
  }

}
