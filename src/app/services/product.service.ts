import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  private products: Array<Product> = [];
  constructor() {
    this.products = [{
      Id: 'a',
      Name: 'Canvas Collection',
      Price: 1750,
      Description: 'Collection of three 16*20 inch Canvases'
    },{
      Id:'b',
      Name:'Acrylic Collection',
      Price: 1750,
      Description: 'Two 12*8 Acrylic Blocks and one 12*12'
    },{
      Id:'c',
      Name:'Framed Collection',
      Price: 1750,
      Description: 'A collection of framed wall art'
    }]
   }

  getProducts(): Array<Product> {
    return this.products;
  }

  getProduct(id:string): Product {
    return this.products.find(i => i.Id === id);
  }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    this.products.slice(this.products.findIndex(i => i.Id === product.Id), 1);
    this.products.push(product);
  }

  deleteProduct(id: string): void {
    this.products.slice(this.products.findIndex(i => i.Id === id), 1);
  }
}
