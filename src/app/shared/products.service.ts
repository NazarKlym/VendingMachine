import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Order, Product, Report,} from './inerface';


@Injectable({providedIn: 'root'})
export  class ProductsService {

  public products: Product[] = [];

  public orders: Order [] = [];

  public reports: Report [] = [];


  removeProduct() {
    this.products = this.products.filter(p => p.quantity !== 0)
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(product: Product) {
    product.editing = true;
  }

  done_editProduct(product: Product) {
    product.editing = false;
  }

  sortProduct() {
    this.products.sort((a, b) => a.quantity - b.quantity);
  }

  purchaseProduct(product: Product) {
    product.quantity--;

    const order = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      date: new Date(),
    }

    this.orders.push(order)
  }


  ordersReport(dateFrom: Date) {

    const preparedDateTo = new Date();

    const result = this.orders.filter(order => dateFrom ? moment(order.date).isBetween(dateFrom, preparedDateTo) : true);

    const reportList = result.reduce((sum, currentOrder) => {
      // @ts-ignore
      let reportForProduct = sum [currentOrder.name];
      return {
        ...sum,
        [currentOrder.name]: {
          price: reportForProduct ? reportForProduct.price + currentOrder.price : currentOrder.price,
          quantity: reportForProduct ? reportForProduct.quantity + currentOrder.quantity : currentOrder.quantity,
        },
      }

    },{sum : 0});

    let keys = Object.keys(reportList);

    keys.forEach((key) => {
      if (key === 'sum') {
        return;
      }

      // @ts-ignore
      let productResult = {...reportList[key], name: key};
      this.reports.push(productResult);

    })
    return result.reduce(function(acc, curr) {
      return acc + curr.quantity * curr.price;
    }, 0)

  }

}
