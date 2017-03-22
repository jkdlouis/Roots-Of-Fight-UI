import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../../models/product.model";
import { Http } from "@angular/http";
import { ProductService } from "../../service/product.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: [ './products.component.sass' ]
})
export class ProductsComponent implements OnInit {

    constructor(private http: Http, private productService: ProductService) {
    }

    ngOnInit() {
    }

    sizeCharts: string[] = [
        'Small',
        'Medium',
        'Large',
        'X-Large',
        'XX-Large',
        'XXX-Large'
    ];

    // addToCart(form: NgForm) {
    //     const product = new Product(
    //         form.value.size,
    //         form.value.quantity
    //     );
    //     this.productService.addProductToCart(product)
    //         .subscribe(
    //             data => console.log(data),
    //             error => console.error(error)
    //         );
    //     form.resetForm();
    // }

}
