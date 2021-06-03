import {Injectable} from '@angular/core';
import {Order, Product, } from './inerface';


@Injectable({providedIn: 'root'})
export  class ProductsService {

  public products: Product[] = [
    {id: 1, name: 'chocolate', price: 11.8, quantity: 2, editing: false,},
    {id: 2, name: 'Cracker', price: 12.4, quantity: 5, editing: false, },
    {id: 3, name: 'Donut', price: 15.00, quantity: 12, editing: false,},
    ];

  public  orders: Order [] = [
    {id: 4, name: 'Donut', price: 15.00, quantity: 12,  date:new Date ()},
  ];


  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(product: Product )  {
    product.editing = true;
    }

  done_editProduct(product: Product)  {
    product.editing = false;
  }

  addOrder(id: number, product: Product){
        product.quantity --
        product.date = new Date();
    this.orders.push(product);
  }
    totalOrder(){

  }

}

