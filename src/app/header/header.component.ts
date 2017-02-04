import { Component } from '@angular/core';
import { AuthService } from '../service/authentication.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.sass']
})
export class HeaderComponent {

    constructor(private authService: AuthService, private router: Router) {}

    // boolean for toggle

    private mainMenuIsExpanded: boolean = false;
    private shopListIsExpanded: boolean = false;
    private martialArtIsExpanded: boolean = false;
    private strikingIsExpanded: boolean = false;
    private grapplingIsExpanded: boolean = false;
    private weaponIsExpanded: boolean = false;

    // nav menu list

    shopLists: string[] = [
        "SHOP ALL",
        "TEES",
        "TANKS",
        "SWEATSHIRTS",
        "SWEATPANTS",
        "SHORTS",
        "HATS",
        "JACKETS"
    ];

    strikingArts : string[] = [
        "BOXING",
        "KARATE",
        "TAEKWONDO",
        "MUAY THAI",
        "SAVATE",
        "SANDA"
    ];

    grapplingArts: string[] = [
        "JUDO",
        "BRAZILIAN JIU-JITSU",
        "GRECO ROMAN WRESTLING",
        "CHINESE WRESTLING"
    ];

    weaponArts: string[] = [
        "SILAT",
        "KALI",
        "ISREAL COMBAT KNIFE"
    ];

    toggle(expanded) {
        this[expanded] = !this[expanded];
    }

    // User Account Authenticaltion

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/signin']);
    }

}
