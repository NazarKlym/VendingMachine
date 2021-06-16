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
  quantity: number;
  date: any;
}

export  interface Report {
  name?: string;
  quantity?: number;
  price? :number;

}
