
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Order, Product, } from './inerface';


@Injectable({providedIn: 'root'})
export  class ProductsService {

  public products: Product[] = [
    {id: 1, name: 'chocolate', price: 11.8, quantity: 2, editing: false,},
    {id: 2, name: 'Cracker', price: 12.4, quantity: 5, editing: false, },
    {id: 3, name: 'Donat', price: 15.00, quantity: 12, editing: false,},
    ];

  public  orders: Order [] = [];


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

  purchaseProduct(id: number, product: Product) {
   this.products.find(p => p.id === id)
    product.quantity --;

    const order = {
      id:product.id,
      name:product.name,
      price: product.price,
      quantity:1,
      date: new Date(),

    }

    this.orders.push(order)
  }

  ordersReport(dateFrom: Date, dateTo: Date) {

    const preparedDateTo = dateTo || new Date();

    const result = this.orders.filter(order => dateFrom ? moment(order.date).isBetween(dateFrom, preparedDateTo) : true);

     let report = result.reduce((sum, currentOrder) => {
       // @ts-ignore
       let reportForProduct = sum [currentOrder.name];

       return {
         ...sum,
         [currentOrder.name]: {
           total: reportForProduct ? reportForProduct.total + currentOrder.price : currentOrder.price,
           quantity: reportForProduct ? reportForProduct.quantity + currentOrder.quantity : currentOrder.quantity,
         },
         total: sum.total + currentOrder.price
       }
     }, {total: 0})

        return report
  }


}


