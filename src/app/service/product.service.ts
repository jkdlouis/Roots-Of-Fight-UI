import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  addProductToCart(product: Product) {
    const body = JSON.stringify(product);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? `?token=${localStorage.getItem('token')}`: '';
    return this.http.post('/product/shopping-cart' + token, body, { headers: headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

}
