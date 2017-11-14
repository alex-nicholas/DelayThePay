import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'dtp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  id = 'New';
  products: Product[];
  constructor(private _productSvc: ProductService, private _router: Router) { }

  ngOnInit() {
    this.products = this._productSvc.getProducts();
  }

  viewDetails(id: string) {
    this._router.navigateByUrl('/product-profile/' + id);
  }
}
