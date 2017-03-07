import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { User } from "../model/user.model";
import { AuthService } from "../service/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.sass' ]
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    }

    onSubmit() {
        const user = new User(this.loginForm.value.email, this.loginForm.value.password);
        this.authService.login(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.loginForm.reset();
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'email': [ '', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}" +
                    "~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]" +
                    "(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") ]
            ],
            'password': [ '', Validators.required ]
        });
    }

}
