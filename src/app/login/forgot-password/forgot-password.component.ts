import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
   const email = this.forgotPasswordForm.value.email;
    console.log(email);

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
