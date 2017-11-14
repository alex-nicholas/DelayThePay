import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: Product = new Product();
  isNew: boolean;

  constructor(
    private _productSvc: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this.isNew = this.id === 'New';
    !this.isNew ? 
      this.getProduct() : 
      this.product = new Product();
  }

  save() {
    if (this.isNew) {
      this._productSvc.createProduct(this.product);
    } else {
      this._productSvc.updateProduct(this.product);
    }
    this.navigateToProducts();
  }

  delete() {
    this._productSvc.deleteProduct(this.product.Id);
  }

  cancel() {
    this._router.navigateByUrl('/products');
  }

  private getProduct(): Product {
    return this.product = this._productSvc.getProduct(this.id);
  }

  private navigateToProducts() {
    this._router.navigateByUrl('/products');
  }
}
