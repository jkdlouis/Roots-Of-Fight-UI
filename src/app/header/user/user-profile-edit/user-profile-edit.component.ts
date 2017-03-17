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

    private editForm: FormGroup;

    private firstName: string;
    private lastName: string;
    private email: string;
    private address: string;
    private city: string;
    private zipcode: string;
    private state: string;

    private birthMonths: string[] = [
        'January',
        'February',
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

    private birthYears: number[] = [];

    private birthDates: number[] = [];

    private martialArts = [
        {
            name: 'BOXING',
            isChecked: false,
        },
        {
            name: 'KARATE',
            isChecked: false,
        },
        {
            name: 'TAEKWONDO',
            isChecked: false,
        },
        {
            name: 'MUAY THAI',
            checked: false,
        },
        {
            name: 'SAVATE',
            isChecked: false,
        },
        {
            name: 'JUDO',
            isChecked: false,
        },
        {
            name: 'BRAZILIAN JIU-JITSU',
            isChecked: false,
        },
        {
            name: 'GRECO ROMAN WRESTLING',
            isChecked: false,
        },
        {
            name: 'CHINESE WRESTLING',
            isChecked: false,
        },
        {
            name: 'KALI',
            isChecked: false,
        },
        {
            name: 'ISREAL COMBAT KNIFE',
            isChecked: false,
        }
    ];

    private isChecked: boolean = false;

    onCheck(value) {
        this.martialArts.isChecked = !value.isChecked;
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
            'birthMonth': [ '', Validators.required ],
            'birthDate': [ '', Validators.required ],
            'birthYear': [ '', Validators.required ],
            'martialArt': [ '', Validators.required ]
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