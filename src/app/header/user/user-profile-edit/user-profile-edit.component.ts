import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../service/authentication.service";
import { User } from "../../../model/user.model";


@Component({
    selector: 'app-user-profile-edit',
    templateUrl: './user-profile-edit.component.html',
    styleUrls: [ './user-profile-edit.component.sass' ]
})
export class UserProfileEditComponent implements OnInit {

    editForm: FormGroup;

    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;

    birthMonths: string[] = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    birthYears: number[] = [];

    birthDates: number[] = [];

    martialArts: string[] = [
        "BOXING",
        "KARATE",
        "TAEKWONDO",
        "MUAY THAI",
        "SAVATE",
        "SANDA",
        "JUDO",
        "BRAZILIAN JIU-JITSU",
        "GRECO ROMAN WRESTLING",
        "CHINESE WRESTLING",
        "SILAT",
        "KALI",
        "ISREAL COMBAT KNIFE"
    ];

    isChecked: boolean = false;

    onCheck() {
        this.isChecked = !this.isChecked;
    }

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    }

    ngOnInit() {

        for (let i = 1999; i <= 2017; i++) {
            this.birthYears.push(i);
        }

        for (let i = 1; i <= 31; i++) {
            this.birthDates.push(i);
        }

        this.editForm = this.formBuilder.group({
            'firstName': [ '', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(24)
            ] ],
            'lastName': [ '', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(24)
            ] ],
            'address': [ '', [
                Validators.required
            ] ],
            'city': [ '', [
                Validators.required
            ] ],
            'state': [ '', [
                Validators.required
            ] ],
            'zipcode': [ '', [
                Validators.required
            ] ],
            'email': [ '', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}" +
                    "~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]" +
                    "(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ] ],
            'birthMonth': ['', [
                Validators.required
            ]],
            'birthDate': ['', [
              Validators.required
            ]],
            'birthYear': ['', [
              Validators.required
            ]]
        });

        this.authService.getUserProfile()
            .subscribe(
                (data: User) => {
                    this.firstName = data.firstName;
                    this.lastName = data.lastName;
                    this.email = data.email;
                    this.address = data.address;
                    this.city = data.city;
                    this.state = data.state;
                    this.zipcode = data.zipcode;
                }
            );

    }

    onSubmit() {
        if (this.editForm.value) {
            this.authService.updateUserProfile(this.editForm.value)
                .subscribe(
                    result => console.log(result),
                    error => console.log(error)
                );
        }

        this.editForm.reset();
    }


}