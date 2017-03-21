import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  constructor() { }

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

}
