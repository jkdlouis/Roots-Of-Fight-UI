import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.sass' ]
})
export class HomeComponent {

    private products = [
        {
            image: '../../assets/images/products/new_releases/ALI_GREY_TRIBLEND_large.jpg',
            alt: 'Ali t-shirt',
            title: 'Ali Grey Triblend T-shirt'
        },
        {
            image: '../../assets/images/products/new_releases/ali_large.jpg',
            alt: 'Ali tank-top',
            title: 'Ali yellow tank top'
        },
        {
            image: '../../assets/images/products/new_releases/ALI-CARDIGAN-FRONT_1024x1024_47aff09a-7015-41ed-bc7c-f54477ee74fc_large.jpg',
            alt: 'Ali Jacket',
            title: 'Ali Cardigan-Front'
        },
        {
            image: '../../assets/images/products/new_releases/ALI-HOODY_large.jpg',
            alt: 'Ali Gray Hoody',
            title: 'Ali Gray Hoody'
        },
        {
            image: '../../assets/images/products/new_releases/2_3dc70d58-41f0-42ee-86b3-83f3fc58c673_large.jpg',
            alt: 'Bruce Lee White Tank Top',
            title: 'Bruce Lee White Tank Top'
        },
        {
            image: '../../assets/images/products/new_releases/1212_e7814842-42e6-4354-bed2-f0c55ef3f9e7_large.jpg',
            alt: 'Julius Erving Yellow Tee',
            title: 'Julius Erving Yellow Tee'
        },
        {
            image: '../../assets/images/products/new_releases/2094-M-01-MRN-2_large.jpg',
            alt: 'Ray Mancini Tee',
            title: 'Ray Mancini Tee'
        },
        {
            image: '../../assets/images/products/new_releases/2124_large.jpg',
            alt: 'Ali White Tee',
            title: 'Ali White Tee'
        },
        {
            image: '../../assets/images/products/new_releases/2366-Clay_large.jpg',
            alt: 'Caly Cassius Yellow Tee',
            title: 'Caly Cassius Yellow Tee'
        },
        {
            image: '../../assets/images/products/new_releases/2768-J.Robinson_large.jpg',
            alt: 'Jackie Robinson White Tee',
            title: 'Jackie Robinson White Tee'
        },
        {
            image: '../../assets/images/products/new_releases/2772-R.Clemente_large.jpg',
            alt: 'Roberto Pittersburgh White Tee',
            title: 'Roberto Pittersburgh White Tee'
        },
        {
            image: '../../assets/images/products/new_releases/2774-B.Ruth_large.jpg',
            alt: 'Baby Ruth Black Tee',
            title: 'Baby Ruth Black Tee'
        },
        {
            image: '../../assets/images/products/new_releases/DAN_HENDERSON_GREY_TRIBLEND_large.jpg',
            alt: 'Dan Henderson Grey Tee',
            title: 'Dan Henderson Grey Tee'
        },
    ]

}
