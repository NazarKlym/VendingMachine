import {Injectable} from '@angular/core';
import { Product } from './inerface';



@Injectable({providedIn: 'root'})
export  class ProductsService {

  public products: Product[] = [
    {id: 1, name: 'chocolate', price: 11.8, quantity: 2,},
    {id: 2, name: 'Cracker', price: 12.4, quantity: 5,},
    {id: 3, name: 'Donut', price: 15.00, quantity: 12,}];


  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(idx: number) {

    let name = this.products[idx].name;
    let result = prompt("Edit Title", name);
    if (result !== null && result !== "") {
      this.products[idx].name = result;
    }

  }
}
