import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { User } from "../model/user.model";
import { AuthService } from "../service/authentication.service";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: [ 'signup.component.sass' ]
})

export class SignupComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            'firstName': [ '', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(24)  ]
            ],
            'lastName': [ '', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(24)  ]
            ],
            'email': [ '', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}" +
                    "~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]" +
                    "(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") ]
            ],
            'password': [ '', [
                Validators.required,
                Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ]
            ]

        });

    }

    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.password,
            this.signUpForm.value.firstName,
            this.signUpForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.signUpForm.reset();
    }







}
