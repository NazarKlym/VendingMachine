import { Component, OnInit, } from '@angular/core';
import {ProductsService} from '../shared/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }


}
