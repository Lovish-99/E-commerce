import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1, 'Product 1', 'This 1 is cool', 100, 'ssadjasd'),
    new Product(2, 'Product 2', 'This 2 is cool', 100, 'dvsavjd'),
    new Product(3, 'Product 3', 'This 3 is cool', 200, 'vvdhvahd'),
    new Product(4, 'Product 4', 'This 4 is cool', 300, 'gsvdha'),
    new Product(5, 'Product 5', 'This 5 is cool', 900, 'nbdvavd'),
    new Product(6, 'Product 6', 'This 6 is cool', 600, 'bvjvkhd'),
    new Product(7, 'Product 7', 'This 7 is cool', 400, 'hvvdvadg'),
  ]
  constructor() { }
  getProducts(): Product[]{
    return this.products
  }
}
