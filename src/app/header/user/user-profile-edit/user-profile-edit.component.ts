import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.sass']
})
export class UserProfileEditComponent implements OnInit{

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){

    this.editForm = this.formBuilder.group({
      'firstName': ['', [
          Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24)
      ]],
      'lastName': ['', [
          Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24)
      ]],
      'address': ['', [
          Validators.required
      ]],
      'city': ['', [
          Validators.required
      ]],
      'state': ['', [
          Validators.required
      ]],
      'zipcode': ['', [
        Validators.required
      ]],
      'email': ['', [
          Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}" +
            "~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]" +
            "(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'currentPassword': ['', [
          Validators.required,
      ]],
      'newPassword': ['', [
          Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ]],
      'repeatNewPassword': ['',
          Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ],
      'dobMonth': ['', [
          Validators.required
      ]],
      'dobDate': ['', [
        Validators.required
      ]],
      'dobYear': ['', [
        Validators.required
      ]]
    });
  }

  onEdit() {
    console.log(this.editForm);
  }


}