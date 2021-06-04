export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  editing: boolean,
}

export  interface Order {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  date: any;

}
