import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/inerface';
import {ProductsService} from '../shared/products.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  name = '';
  quantity = 0;
  price = 0;


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(){

    const product: Product = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      id: Date.now(),
    };
    this.productService.addProduct(product);
  }

}
