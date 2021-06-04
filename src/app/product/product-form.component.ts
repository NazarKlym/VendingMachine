import {Component, OnInit,} from '@angular/core';
import {Product} from '../shared/inerface';
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
  editing = false;
  editable = false;
  listProducts: boolean = true;
  dateFrom: any;
  dateTo: any;
  reportList:any;


  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (!this.name) {
      return;
    }
    if (!this.price) {
      return;
    }
      const product: Product = {
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        id: Math.random(),
        editing: this.editing,
      };
      this.productsService.addProduct(product);
      this.name = '';
      this.quantity = 0;
      this.price = 0;
  }

  toggle(){
    this.listProducts = !this.listProducts;
  }

   ordersReport(){
   this.reportList = this.productsService.ordersReport(this.dateFrom);
  }

}
