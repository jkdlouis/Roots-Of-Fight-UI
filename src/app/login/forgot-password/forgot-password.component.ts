import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../model/user.model";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
   // const user = new User(this.forgotPasswordForm.value.email);
   // this.authService.retrievePassword(user)
   //     .subscribe(
   //         data => {
   //             console.log(data.password);
   //             this.router.navigateByUrl('/');
   //         },
   //         error = console.error(error)
   //     );
      console.log(this.forgotPasswordForm.value.email);
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
